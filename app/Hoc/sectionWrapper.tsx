import { styles } from "~/utilities/style";
import { motion } from "framer-motion";
type TSectionWrapperProps = {
  Component: React.FC;
  id: string;
};

const SectionWrapper = ({ Component, id }: TSectionWrapperProps) =>
  function HOC() {
    return (
      <motion.section
        id={id}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
            transition: {
              duration: 1,
              type: "spring",
              damping: 15,
              stiffness: 100,
            },
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              type: "spring",
              damping: 15,
              stiffness: 100,
            },
          },
        }}
      >
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
