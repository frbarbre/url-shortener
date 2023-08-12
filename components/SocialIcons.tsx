"use client";

import { socialIcons } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useState } from "react";

export default function SocialIcons() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <section className="flex gap-[24px]">
      {socialIcons.map((icon) => (
        <Image
          src={isHovered === icon.icon ? icon.iconActive : icon.icon}
          alt={icon.icon}
          width={24}
          height={24}
          onMouseEnter={() => setIsHovered(icon.icon)}
          onMouseLeave={() => setIsHovered("")}
          className="cursor-pointer"
          key={nanoid()}
        />
      ))}
    </section>
  );
}
