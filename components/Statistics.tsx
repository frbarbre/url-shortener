"use client";

import { statisticPoints } from "@/constants";
import StatCard from "./StatCard";
import { nanoid } from "nanoid";
import { motion as m } from "framer-motion";

export default function Statistics() {
  return (
    <section className="py-[80px] md:pb-[208px] md:pt-[120px] max-w-[1110px] mx-auto">
      <m.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-dark-violet font-bold text-[28px] tracking-[-0.7px] leading-[48px] md:text-[40px] md:tracking-[-1px] text-center pb-[16px] md:pb-[18px]"
      >
        Advanced Statistics
      </m.h2>
      <m.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="font-medium text-gray-violet max-w-[540px] text-center mx-auto md:text-[18px] leading-[28px] tracking-[0.11px] md:leading-[32px] md:tracking-[0.12px] pb-[92px] md:pb-[100px]"
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </m.h3>
      <div className="flex flex-col md:flex-row gap-x-[30px] gap-y-[92px] relative">
        <>
          {statisticPoints.map((point, index) => (
            <StatCard
              image={point.image}
              text={point.text}
              title={point.title}
              index={index}
              key={nanoid()}
            />
          ))}
          <m.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.65 }}
            className="w-[8px] h-full md:h-[8px] md:w-full bg-cyan absolute left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0 md:top-[50%]"
          />
        </>
      </div>
    </section>
  );
}
