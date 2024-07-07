import CallToAction from "../components/CallToAction";

export default function Project() {
  return (
    <div className="min-h-screen justify-center items-center flex">
      <div className="max-w-2xl flex flex-col  gap-6 justify-center items-center">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Build Fun And Engaging Full Stack Projects
        </p>
        <div>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
