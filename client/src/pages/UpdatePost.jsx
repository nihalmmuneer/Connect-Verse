import { Select, TextInput, Button, FileInput, Alert } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdatePost = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const details = useParams();
  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`/api/post/get-posts?postId=${details.postId}`);
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.message);
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [details.postId]);
  const handleImageUpload = async () => {
    try {
      if (!file) {
        setImageUploadError("Image is not uploaded");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError(error);
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setFormData({ ...formData, image: downloadUrl });
            setImageUploadProgress(null);
            setImageUploadError(null);
          });
        }
      );
    } catch (error) {
      setImageUploadError(error);
      setImageUploadProgress(null);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/post/update-posts/${details?.postId}/${users.currentUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      } else {
        setFormData(data.posts);
        setPublishError(null);
        navigate(`/posts/${data.slug}`);
      }
    } catch (error) {
      setPublishError(error.message);
      return;
    }
  };
  return (
    <div className=" p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className=" text-3xl font-semibold text-center my-7">
        Update a post
      </h1>
      <div className="">
        <form className="flex flex-col gap-4" onSubmit={handlePublish}>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <TextInput
              required
              type="text"
              id="title"
              value={formData.title}
              placeholder="Title"
              className="flex-1"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
            />
            <Select
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
            >
              <option value="select">Select a category</option>
              <option value="reactjs">React.js</option>
              <option value="javaScript">javaScript</option>
              <option value="redux">Redux</option>
            </Select>
          </div>
          <div className=" border-teal-500 border-4 p-3 border-dotted ">
            <div className="flex justify-between items-center">
              <FileInput
                type="file"
                accept="image/*"
                // required
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                type="button"
                gradientDuoTone="purpleToBlue"
                outline
                onClick={handleImageUpload}
              >
                {imageUploadProgress ? (
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                    className=" h-14 w-full"
                  />
                ) : (
                  <span>Upload image</span>
                )}
              </Button>
            </div>
          </div>
          {imageUploadError && (
            <Alert color="failure">{imageUploadError}</Alert>
          )}
          {formData && formData.image && (
            <img
              src={formData && formData.image}
              alt="form-img"
              value={formData.image}
              className="h-76  w-full object-fill"
            />
          )}
          <ReactQuill
            theme="snow"
            placeholder="write something.."
            value={formData.content}
            className="h-72 mb-12"
            id="content"
            required
            onChange={(value) => {
              setFormData({ ...formData, content: value });
            }}
          />
          <Button
            type="submit"
            gradientDuoTone="purpleToPink"
            className="w-full"
          >
            Update
          </Button>
        </form>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default UpdatePost;
