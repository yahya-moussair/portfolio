import React from "react";
import images from "../../constants/images";
import { useAppContext } from "../../context";

const Project = () => {
  const { project } = useAppContext();
  return (
    <>
      <div className='flex flex-col gap-y-15 py-9 lg:px-10 px-3 text-center lg:py-10 z-10 w-full"'>
        <h1 className="text-[3rem] font-bold">Projects</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 place-items-center">
          {project?.map((e, index) => (
            <div
              key={index}
              className="group overflow-hidden relative cursor-pointer gap-y-5 w-fit h-fit  bg-white/30 backdrop-blur-md border rounded-2xl border-white/10 shadow-lg"
            >
              <img
                src={images.easy}
                alt=""
                className="lg:rounded-xl rounded-t-xl"
              />
              <div className="lg:group-hover:bottom-0 flex flex-col lg:gap-y-7 justify-center gap-y-5 px-5 py-5 items-start bg-gray-700/70 w-full h-full lg:absolute lg:bottom-[-200%] lg:transition-all lg:duration-300">
                <h1 className="text-2xl font-bold">{e.projectName}</h1>
                <p className="text-start font-semibold">
                  {e.description}
                </p>
                <div className={`${'repoLink' in e ? "flex gap-x-4" : ""}`}>
                  <button>
                    <a
                      href={e.repoLink}
                      target="_blank"
                      className={`${'repoLink' in e ==false && "hidden"} bg-white px-5 py-2 text-black font-semibold rounded-lg lg:hover:bg-black lg:hover:text-white lg:transition-all lg:duration-300`}
                    >
                      Get Code
                    </a>
                  </button>
                  <button>
                    <a
                      href={e.demoLink}
                      target="_blank"
                      className="bg-white px-5 py-2 text-black font-semibold rounded-lg lg:hover:bg-black lg:hover:text-white lg:transition-all lg:duration-300"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
