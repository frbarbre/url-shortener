'use client'

import Image from "next/image";
import { motion as m } from "framer-motion";

interface Props {
  image: string;
  text: string;
  title: string;
  index: number;
}

export default function StatCard({ image, text, title, index }: Props) {
  return (
    <m.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0}}
      className={`bg-white px-[32px] pb-[41px] rounded-[5px] md:max-w-[350px] relative z-10 ${
        index === 1
          ? "md:translate-y-[44px]"
          : index === 2
          ? "md:translate-y-[88px]"
          : ""
      }`}
    >
      <div className="w-[88px] h-[88px] rounded-full bg-violet flex justify-center items-center -translate-y-[50%] mx-auto md:ml-0">
        <Image src={image} alt={title} width={40} height={40} />
      </div>
      <h2 className="text-center md:text-left text-[22px] text-violet font-bold mt-[-11px]">
        {title}
      </h2>
      <p className="text-center md:text-left text-[15px] text-gray-violet leading-[26px] font-medium pt-[12px]">
        {text}
      </p>
    </m.article>
  );
}
