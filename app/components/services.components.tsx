import { motion } from "framer-motion";
import { ShopifyWhite, dev, fig, adj } from "~/assets";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

const ServicesComponent = () => {
  return (
    <motion.section
      className="mt-40 max-w-[1200px]   mx-auto"
      variants={staggerContainer()}
    >
      <div className=" w-full flex flex-col rounded-md bg-zinc-900">
        {/* <h3 className={`text-center mt-5 font-outfit text-white md:text-[30px] sm:text-[30px] xs:text-[40px] text-[28px] flex gap-4 justify-center items-center mb-10`}> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z"></path></svg> Services</h3> */}
        <div className="flex flex-col p-10 gap-10">
          <h2 className={`${styles.SubHeadText}`}>
            Our Mission Is To Make Your Business <br /> Better Through
            Technology{" "}
          </h2>

          <div className="flex gap-3 border border-[#17821f] w-fit p-2 rounded-md items-center bg-[#dafcdf]">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#17821f" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
            <h3 className={`text-[#17821f] font-normal font-outfit text-[22px]`}>
              Multiple Services{" "}
            </h3>
          </div>

          <div className="flex md:flex-row flex-col ">
            <div className="w-full md:w-1/3  h-72 flex flex-col justify-center gap-5 ">
              <div className="w-16 h-16  ">
                <img className="w-16 h-16" src={adj} alt="shopify-icon" />
              </div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M180.7,172H107.81a44,44,0,1,1-79-30.41,4,4,0,0,1,6.4,4.81A35.67,35.67,0,0,0,28,168a36,36,0,0,0,72,0,4,4,0,0,1,4-4h76.7a12,12,0,1,1,0,8ZM64,180a12,12,0,0,0,9.33-19.54l37.11-60.3a4,4,0,0,0-1.31-5.51A36,36,0,1,1,161,49.58a4,4,0,1,0,7.33-3.19,44,44,0,1,0-66.71,52.83l-35.1,57.05A11.58,11.58,0,0,0,64,156a12,12,0,0,0,0,24Zm128-56a44,44,0,0,0-19.56,4.58l-35.11-57A12,12,0,1,0,128,76a12.24,12.24,0,0,0,2.52-.27L167.63,136a4,4,0,0,0,5.5,1.31A36,36,0,1,1,192,204a4,4,0,0,0,0,8,44,44,0,0,0,0-88Z"></path>
              </svg> */}
              <h3 className={`${styles.serviceHeadText} `}>Web Development</h3>
              <p className={`${styles.sectionSubText}`}>
                We build websites that are fast, secure, and easy to navigate,
                and that help you reach your goals.
              </p>
            </div>
            <div className="w-full md:w-1/3  h-72 flex  flex-col justify-center gap-5 ">
              <div className="w-16 h-16 ">
                <img className="w-16 h-16" src={fig} alt="shopify-icon" />
              </div>
              <h3 className={`${styles.serviceHeadText}`}>
                Shopify apps Development
              </h3>
              <p className={`${styles.sectionSubText}`}>
                We create custom Shopify apps to help you scale your business or
                help reach more customers.
              </p>
            </div>
            <div className="w-full md:w-1/3  h-72 flex flex-col justify-center gap-5 ">
              <div className="w-16 h-16 ">
                <img className="w-16 h-16" src={dev} alt="shopify-icon" />
              </div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM88,156a12,12,0,1,1-12,12A12,12,0,0,1,88,156ZM44,208V48a4,4,0,0,1,4-4H84V148.4a20,20,0,1,0,8,0V105.66l56,56V212H48A4,4,0,0,1,44,208Zm168,0a4,4,0,0,1-4,4H156V160a4,4,0,0,0-1.17-2.83L92,94.34V44h40V72a4,4,0,0,0,1.17,2.83L151.33,93A20,20,0,1,0,157,87.33l-17-17V44h68a4,4,0,0,1,4,4ZM168,92a12,12,0,1,1-12,12A12,12,0,0,1,168,92Z"></path>
              </svg> */}
              <h3 className={`${styles.serviceHeadText}`}>
                {" "}
                System and apps optimization
              </h3>
              <p className={`${styles.sectionSubText}`}>
                We optimize your systems and apps to make them faster, more
                efficient, and more secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesComponent;
