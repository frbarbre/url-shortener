"use client";

import { motion as m } from "framer-motion";
import { useState } from "react";

interface Props {
  text: string;
  variant: "minimal" | "detailed";
  delay: number;
  size?: string;
  rounded: "full" | "std" | "tiny";
  fontSize?: string;
  isCopyButton?: boolean;
  type?: "submit" | "button";
}

export default function Button({
  text,
  variant,
  delay,
  size,
  rounded,
  fontSize,
  isCopyButton,
  type,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.button
      initial={{ y: isCopyButton ? 0 : -10, opacity: isCopyButton ? 1 : 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: delay }}
      exit={{ opacity: 0 }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type={type || "button"}
      className={`${
        fontSize || "text-[18px] md:text-[15px]"
      } text-white font-bold ${
        variant === "detailed"
          ? `${text === "Copied!" ? "bg-violet" : "bg-cyan"} ${
              size || "h-[48px] md:h-[40px] w-full md:w-[105px]"
            } ${
              rounded === "full"
                ? "rounded-full"
                : rounded === "std"
                ? "rounded-[10px]"
                : rounded === "tiny"
                ? `rounded-[5px] ${!isCopyButton && "md:rounded-[10px]"}`
                : ""
            }`
          : "md:text-gray-violet"
      }`}
    >
      <m.div
        animate={{
          backgroundColor:
            isHovered &&
            variant === "detailed" &&
            text !== "Copied!" &&
            !isCopyButton
              ? "#9AE3E3"
              : !isHovered &&
                variant === "detailed" &&
                text !== "Copied!" &&
                !isCopyButton
              ? "#2BD0D0"
              : "",
        }}
        className={`w-full h-full flex items-center justify-center rounded-[inherit] ${
          isCopyButton &&
          text !== "Copied!" &&
          "hover:bg-[#9AE3E3] transition-all"
        }`}
      >
        {text}
      </m.div>
    </m.button>
  );
}
