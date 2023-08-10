"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import { motion as m, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="flex justify-between items-center pt-[40px] px-[24px] pb-[23px] md:pt-[48px] md:px-[48px] md:pb-[78px] max-w-[1204px] mx-auto relative">
      <article className="flex items-center gap-[45px]">
        <Image src={"/logo.svg"} alt="logo" width={120} height={32.6} />
        <nav className="hidden md:block">
          <ul className="flex gap-[29px] text-[15px] text-gray-violet font-bold">
            {navLinks.map((link) => (
              <li
                key={nanoid()}
                className="hover:text-violet transition-all cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </nav>
      </article>

      <div
        className="flex flex-col gap-[6px] md:hidden cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <m.span
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: isActive ? 9 : 0, rotate: isActive ? -45 : 0 }}
          className={`w-[24px] h-[3px] bg-gray-violet`}
        />
        <m.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isActive ? 45 : 0 }}
          className={`w-[24px] h-[3px] bg-gray-violet`}
        />
        <m.span
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: isActive ? -9 : 0,
            rotate: isActive ? -45 : 0,
            opacity: isActive ? 0 : 1,
          }}
          className={`w-[24px] h-[3px] bg-gray-violet`}
        />
      </div>

      <article className="md:flex hidden gap-x-[37px]">
        <Button variant={"minimal"}>Login</Button>
        <Button variant={"detailed"}>Sign Up</Button>
      </article>

      <AnimatePresence>
        {isActive && (
          <m.article
            initial={{ y: "100%", scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            className="absolute md:hidden bottom-0 left-[24px] right-[24px] bg-violet translate-y-[100%] rounded-[10px] px-[24px] py-[40px]"
          >
            <m.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav>
                <ul className="flex flex-col items-center gap-[30px] text-white text-[18px] font-bold">
                  {navLinks.map((link, index) => (
                    <m.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      key={nanoid()}
                    >
                      {link.title}
                    </m.li>
                  ))}
                </ul>
              </nav>
              <m.hr
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full h-[1px] bg-[#9E9AA8]/25 border-none my-[31px]"
              />
              <article className="flex flex-col">
                <Button variant={"minimal"}>Login</Button>
                <Button variant={"detailed"}>Sign Up</Button>
              </article>
            </m.section>
          </m.article>
        )}
      </AnimatePresence>
    </header>
  );
}
