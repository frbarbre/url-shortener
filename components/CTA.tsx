"use client";

import Button from "./Button";
import { motion as m } from "framer-motion";

export default function CTA() {
  return (
    <m.section
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0 }}
      className="md:px-[48px] bg-violet bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover flex flex-col items-center gap-[16px] md:gap-[32px] py-[90px] md:py-[57px] px-[36px] "
    >
      <h2 className="text-white font-bold text-[28px] leading-[48px] tracking-[-0.7px] md:text-[40px] md:tracking-[-1px]">
        Boost your links today
      </h2>
      <Button
        delay={0}
        rounded="full"
        text="Get Started"
        variant="detailed"
        size="w-[197px] h-[56px]"
        fontSize="text-[20px]"
      />
    </m.section>
  );
}
