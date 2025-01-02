import React, { useEffect, useRef, useState } from "react";
import { web } from "~/assets";
import AnimationWrapper from "~/common/AnimationPresence";

export let ActiveTab: React.RefObject<HTMLButtonElement>;
export let Activelineref: React.RefObject<HTMLHRElement>;
type IWork = {
  type_id: number;
  image: string;
  source_code_link: string;
  tags: { IT: string }[];
  name: string;
  url: string;
}[];
type ITaps = {
  index: number;
  TypeOfWork: string;
  icon: string | undefined;
  IsJsx?: boolean;
}[];
const TabsNavigate = ({
  workFilter,
  defaultIndex = 0,
  filteredWork,
}: {
  workFilter: ITaps;
  defaultIndex?: number;
  children?: React.ReactNode;
  filteredWork: IWork;
}) => {
  Activelineref = useRef<HTMLHRElement>(null);
  ActiveTab = useRef<HTMLButtonElement>(null);
  const [indexroute, setindexroute] = useState(defaultIndex);
  const [filtered, setfiltered] = useState(filteredWork);

  const Changepagestate = (btn: EventTarget, index: number) => {
    if (btn instanceof HTMLButtonElement && Activelineref.current) {
      Activelineref.current.style.width = btn.offsetWidth + "px";
      Activelineref.current.style.left = btn.offsetLeft + "px";
    }
    const filtered = filteredWork.filter((work) => work.type_id === index);
    setfiltered(filtered);
    console.log(index);
    setindexroute(index);
  };
  useEffect(() => {
    if (ActiveTab.current && Activelineref.current) {
      Changepagestate(ActiveTab.current, defaultIndex);
    }
  }, [defaultIndex]);

  return (
    <>
      <div className="relative mb-8 bg-transparent border-b border-gray-700 flex flex-nowrap overflow-x-auto">
        {workFilter.map((item, index) => {
          return (
            <button
              key={index}
              ref={defaultIndex === index ? ActiveTab : null}
              onClick={(e) => Changepagestate(e.target, item.index)}
              className={
                "p-4 px-5 capitalize font-medium flex justify-between items-start gap-3 " +
                (indexroute === index ? "text-white " : "text-gray-400 ")
                // (defaulthidden?.includes(route.name) ? " md:hidden " : "")
              }
            >
              {item.IsJsx ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <img
                  src={item.icon}
                  className={`w-6 h-6 p-0   aspect-auto  ${indexroute !== index && " opacity-50"} `}
                  alt={item.TypeOfWork}
                />
              )}

              {item.TypeOfWork}
            </button>
          );
        })}

        <hr className=" absolute bottom-0 duration-300" ref={Activelineref} />
      </div>

      <div
        key={indexroute} // Changing key will reset animation on filter change
        className="flex flex-col justify-center items-center mt-7 min-[900px]:grid grid-cols-2 min-[1200px]:grid-cols-2 gap-4"
      >
        {filtered.map((project, index) => (
          <AnimationWrapper
            key={index}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <WorkCard project={project}  />
          </AnimationWrapper>
        ))}
      </div>
    </>
  );
};
const WorkCard = ({ project }: { project: IWork[number] }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}> */}
      <div className=" bg-zinc-900 p-2 h-full  w-full xs:[350px] rounded-md  shadow-md">
        <div className="relative w-full ">
          <img
            src={web}
            alt={project.image}
            className="w-[495px] object-contain rounded-md "
          />
          {
            project.tags[0].IT.includes("WordPress")
            // && (
            // <div className="flex justify-end absolute inset-0 m-3 card-img_hover">
            //   <div className="  black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer ">
            //    <img src={"github"} alt="" className="w-1/2 h-1/2 object-contain" />
            //   </div>
            // </div>
            // )
          }
        </div>
        <div className="flex flex-row justify-between items-center p-5 px-10">
          <div className="">
            <h2
              className={`font-outfit text-white md:text-[30px] sm:text-[30px] xs:text-[40px] text-[28px]`}
            >
              {project.name}
            </h2>
            <p
              className={`font-outfit text-white font-thin  md:text-[24px] sm:text-[22px] xs:text-[30px] text-[20px]`}
            >
              {project.tags[0].IT}
            </p>
          </div>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative border group border-gray-300 rounded-full w-16 h-16 flex justify-center items-center   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="white"
              className={`w-6 h-6 text-blue-500 ${
                isHovered ? "animate-move-diagonal" : "animate-return"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TabsNavigate;
