import { motion } from "framer-motion";
import AnimationWrapper from "~/common/AnimationPresence";
import { servicesAndFeatures } from "~/constants";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

const ServicesComponent = () => {
  return (
    <motion.section
      className="mt-40 max-w-2xl md:max-w-3xl lg:max-w-6xl xl:max-7xl mx-auto dark:bg-zinc-900 bg-gray-200"
      variants={staggerContainer()}
    >
      <div className=" w-full flex flex-col rounded-md  ">
        <div className="flex flex-col p-10 gap-8">
          <h2 className={`${styles.SubHeadText}`}>
            Our Mission Is To Make Your Business <br /> Better Through
            Technology{" "}
          </h2>
          <p className={`${styles.sectionSubText} text-wrap w-3/4`}>
            We provide innovative solutions that meet your unique needs. Whether
            it&apos;s building a custom website, creating a mobile app, or
            developing a complex software.
          </p>

          <div className="flex flex-wrap ">
            {servicesAndFeatures.map((service, i) => {
              return (
                <AnimationWrapper
                  key={i}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-1/2 mt-5 lg:w-1/3 h-72 flex flex-col justify-center gap-5 "
                  transition={{ duration: 1, delay: i * 0.5 }}
                >
                  {/* <div key={service.title} className="w-1/2 mt-5 lg:w-1/3 h-72 flex flex-col justify-center gap-5"> */}
                  <div className="w-16 h-16  ">
                    <img
                      className="w-16 h-16"
                      src={service.icon}
                      alt="shopify-icon"
                    />
                  </div>
                  <h3 className={`${styles.serviceHeadText} `}>
                    {service.title}
                  </h3>
                  <p className={`${styles.sectionSubText} text-wrap w-3/4 `}>
                    {service.description}
                  </p>
                  {/* </div> */}
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesComponent;
