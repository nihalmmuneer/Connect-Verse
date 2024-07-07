import Banner from "../assets/real-estate.png";
import { Button } from "flowbite-react";
const CallToAction = () => {
  return (
    <div className="flex items-center  w-full flex-col lg:max-w-3xl border border-teal-500 p-4 rounded-tl-2xl rounded-bl-none rounded-tr-none rounded-br-2xl  text-center  mx-auto gap-6 lg:flex-row">
      <div className="flex flex-col max-auto gap-2 flex-1 item-center ">
        <h1 className=" text-2xl self-start font-semibold whitespace-nowrap italic">
          Explore Nihal&apos;s Full Stack Projects
        </h1>
        <p className=" text-red-800 my-2 font-semibold self-start text-sm italic  ">
          Check Out these exciting Full Stack Project Here
        </p>
        <Button
          type="button"
          gradientDuoTone="purpleToPink"
          className="w-full rounded-tl-2xl rounded-bl-none rounded-tr-none  rounded-br-2xl"
        >
          <a
            href="https://real-estate-z0z4.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold italic shadow-lg"
          >
            Nihal&apos;s Real Estate Project
          </a>
        </Button>
      </div>
      <div className="flex flex-1">
        <img
          src={Banner}
          className=" h-60 w-full shadow-lg"
          alt="javascript_img"
        />
      </div>
    </div>
  );
};

export default CallToAction;
