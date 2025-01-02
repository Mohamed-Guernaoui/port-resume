import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { stepsProcess } from "~/constants";
import { styles } from "~/utilities/style";
import { staggerContainer } from "~/utilities/motion";
import AnimationWrapper from "~/common/AnimationPresence";

const ProcessLine = () => {
  return (
    <AnimationWrapper>
      <ul
        aria-label="Activity feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-6 before:left-6 before:h-full before:border before:-translate-x-1/2 before:border-gray-400 before:border-dashed after:absolute after:top-6 after:left-6 after:bottom-6 after:border-dashed after:-translate-x-1/2 after:border-gray-400"
      >
        {stepsProcess.map((item, i) => {
          return (
            <AnimationWrapper
              key={i}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            >
              <li role="article" className="relative pl-6 ">
                <div className="">
                  <span className="absolute top-5 left-0 z-10 flex items-center p-3 justify-center  w-8 h-8 -translate-x-1/2 rounded-full text-slate-700 ring-4 dark:ring-[#f64343ab] ring-red-600 dark:bg-zinc-900 bg-white ">
                    <h2
                      className={
                        "font-outfitsubtext dark:text-white text-black  "
                      }
                    >
                      {item.step}
                    </h2>
                  </span>
                </div>

                <div className="flex flex-col ml-5 flex-1 gap-5 bg-gray-200 dark:bg-zinc-900 p-5 rounded-md">
                  <h4
                    className={
                      "font-outfitsubtext  font-normal sm:text-[24px] text-[22px] leading-[29px] lg:leading-[32px]  tracking-wider dark:text-white "
                    }
                  >
                    {" "}
                    {item.title}{" "}
                  </h4>
                  <p className={styles.sectionSubText}>{item.description}</p>
                </div>
              </li>
            </AnimationWrapper>
          );
        })}
      </ul>
    </AnimationWrapper>
  );
};

const Process = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      className="relative mx-auto mt-20 w-full mb-32"
    >
      <div className="w-full flex flex-col justify-start items-start gap-5 mb-10">
        <h2 className={`${styles.SubHeadText} `}>Our process to success</h2>
        <p className={`${styles.sectionSubText}  `}>
          We guide you from discovery to delivery, ensuring custom solutions.
        </p>
      </div>

      <ProcessLine />
    </motion.section>
  );
};

export default SectionWrapper({ Component: Process, id: "processLine" });
