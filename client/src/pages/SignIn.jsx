import { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OAuth } from "../components/OAuth";

export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex p-3 mx-auto md:items-center max-w-3xl flex-col md:flex-row gap-5">
        <div className="flex-1">
          <Link to="/" className=" font-bold text-4xl dark:text-white">
            <span className=" mr-1 text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1">
              Connect
            </span>
            Verse
          </Link>
          <p className="text-sm mt-5 ">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1 justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="text"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Spinner>
                  <span>Loading...</span>
                </Spinner>
              ) : (
                <span>Sign In</span>
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don&apos;t have an account?</span>
            <Link className="text-blue-500" to="/sign-up">
              {" "}
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <>
              <Alert color="failure">{errorMessage}</Alert>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
