import React from "react";
// import { AraBlog, Travelweb, app,  } from "~/assets";
import { styles } from "~/utilities/style";

const BentoBox = () => {
  return (
    <section className="text-white max-w-7xl mx-auto my-20">
      <div className="flex flex-row w-full gap-7">
        <div className="border border-zinc-800 rounded-lg  w-2/3 bg-zinc-900">
          <div className="flex flex-row justify-between items-center p-5 px-10">
            <div className="">
              <h2
                className={`font-outfit text-white   md:text-[30px] sm:text-[30px] xs:text-[40px] text-[28px]`}
              >
                Websites
              </h2>
              <p
                className={`font-outfit text-white font-thin  md:text-[24px] sm:text-[22px] xs:text-[30px] text-[20px]`}
              >
                lorem ipsum
              </p>
            </div>

            <button className="border border-gray-700 rounded-full w-16 h-16 flex justify-center items-center   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
          {/* <div className='min-h-[500px] flex justify-center items-center bg-[#0e1010] m-4 rounded-lg'> */}
          <div className="max-w-full p-4">
            <img src={""} alt="" className="rounded-md" />
          </div>
          {/* </div> */}
        </div>

        <div className="border border-zinc-800 rounded-lg  w-1/3 bg-zinc-900">
          <div className="flex flex-row justify-between items-center p-5 px-10">
            <div className="">
              <h2
                className={`font-outfit text-white font-thin  md:text-[30px] sm:text-[30px] xs:text-[40px] text-[28px]`}
              >
                Apps
              </h2>
              <p
                className={`font-outfit text-white font-thin  md:text-[24px] sm:text-[22px] xs:text-[30px] text-[20px]`}
              >
                lorem ipsum
              </p>
            </div>

            <button className="border border-gray-700 rounded-full w-16 h-16 flex justify-center items-center   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
          {/* <div className='min-h-[500px] flex justify-center items-center bg-[#0e1010] rounded-lg'> */}
          <div className="max-w-full p-4">
            <img src={""} alt="" className="rounded-lg max-h-[500px]" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default BentoBox;
