"use client";

import { motion as m } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  index: number;
}

export default function NavLink({ title, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.li
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0 }}
      className="cursor-pointer hover:text-dark-blue"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <m.p animate={{ color: isHovered ? "#34313D" : "#9E9AA8" }}>{title}</m.p>
    </m.li>
  );
}
