"use client";

import Image from "next/image";
import Button from "./Button";
import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <m.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0 }}
      className="flex flex-col md:flex-row-reverse justify-between max-w-[1206px] mx-auto gap-[37px] md:items-center pb-[68px] px-[24px] md:px-[48px]"
    >
      <div className="relative md:w-full aspect-[511/337] max-w-[733px] lg:mr-[-290px] md:mr-[-160px] mr-[-160px]">
        <Image src={"/illustration-working.svg"} alt="hero" fill />
      </div>
      <article className="flex flex-col items-center md:items-start max-w-[585px] mx-auto md:ml-0">
        <h1 className="text-[42px] leading-[48px] tracking-[-1.05px] font-bold text-dark-blue text-center md:text-left lg:text-[80px] mlgtracking-[-2px] lg:leading-[90px] pb-[15px] md:pb-[5px]">
          More than just shorter link
        </h1>
        <h3 className="text-center md:text-left font-medium text-gray-violet text-[18px] leading-[30px] tracking-[0.12px] max-w-[540px] mx-auto md:ml-0 pb-[32px] md:pb-[38px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h3>
        <Button
          text="Get Started"
          rounded="full"
          delay={0.5}
          variant="detailed"
          fontSize="text-[20px]"
          size="h-[56px] w-[197px]"
        />
      </article>
    </m.section>
  );
}
