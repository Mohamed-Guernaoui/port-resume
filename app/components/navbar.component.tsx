import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const lastProgressRef = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((currentProgress) => {
      const difference = currentProgress - lastProgressRef.current;
      if (Math.abs(difference) > 0.01) {
        setIsHidden(difference > 0);
        lastProgressRef.current = currentProgress;
      }
    });

    return () => unsubscribe(); // Clean up on component unmount
  }, [scrollYProgress]);
  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex text-white w-full justify-center pt-3"
    >
      <nav className="flex font-outfit justify-between gap-3 rounded-lg bg-zinc-900 p-5 *:rounded-lg *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 hover:*:text-black focus-visible:*:bg-gray-200">
        <a href="/" className="bg-white">
          <svg
            className="h-6 w-6"
            fill="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </a>
         <a href="/">Home</a>
        {/* <a href="/">Services</a> */}
        <a href="/about/page">About</a>
        <a href="/">Contact</a>
      </nav>
    </motion.div>
  );
};

export default NavBar;
