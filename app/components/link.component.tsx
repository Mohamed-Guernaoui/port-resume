import { motion } from "framer-motion";
import { fadeIn } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import { useState } from "react";

const Link = ({
  link,
  index,
}: {
  link: { name: string; link: string; icon: string };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="flex items-center z-20  gap-1 "
      variants={fadeIn("left", "", 0.5, index * 0.1)}
    >
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={link.link}
        className={`${styles.sublink} flex flex-row gap-2 items-center`}
      >
        <div className="relative h-6 w-6 rounded-md flex bg-transparent bg-white  p-1">
          <img src={link.icon} alt="object-cover h-6 w-6" />
        </div>
        {link.name}{" "}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fde8e8"
        className={`w-3 h-3 hidden md:block ${
          isHovered ? "animate-move-diagonal" : "animate-return"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </motion.div>
  );
};

export default Link;
