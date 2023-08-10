import { motion as m } from "framer-motion";
import { useState } from "react";

interface Props {
  text: string;
  variant: "minimal" | "detailed";
  delay: number;
  size?: string;
  rounded: "full" | "std" | "tiny";
  fontSize?: string;
}

export default function Button({ text, variant, delay, size, rounded, fontSize }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.button
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor:
          isHovered && variant === "detailed" && text !== "Copied!"
            ? "#9AE3E3"
            : !isHovered && variant === "detailed" && text !== "Copied!"
            ? "#2BD0D0"
            : "",
      }}
      transition={{ delay: delay }}
      exit={{ opacity: 0 }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${fontSize || "text-[18px] md:text-[15px]"} text-white font-bold ${
        variant === "detailed"
          ? `${text === "Copied!" ? "bg-violet" : "bg-cyan"} ${
              size || "h-[48px] md:h-[40px] w-full md:w-[105px]"
            } ${
              rounded === "full"
                ? "rounded-full"
                : rounded === "std"
                ? "rounded-[10px]"
                : rounded === "tiny"
                ? "rounded-[5px]"
                : ""
            }`
          : "md:text-gray-violet"
      } `}
    >
      {text}
    </m.button>
  );
}
