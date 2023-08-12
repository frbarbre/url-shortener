"use client";

import { footerLinks } from "@/constants";
import Image from "next/image";
import FooterLink from "./FooterLink";
import SocialIcons from "./SocialIcons";
import { motion as m } from "framer-motion";
import { nanoid } from "nanoid";

export default function Footer() {
  return (
    <m.footer
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1 }}
      className="px-[24px] md:px-[48px] bg-dark-violet py-[54px] md:py-[71px]"
    >
      <m.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0}} className="flex flex-col lg:flex-row items-center justify-between max-w-[1110px] mx-auto lg:items-start gap-[48px]">
        <Image src={"/logo-white.svg"} alt="logo" width={120} height={32.6} />
        <article className="flex flex-col md:flex-row gap-y-[40px] gap-x-[78px] text-center md:text-left">
          {footerLinks.map((link) => (
            <FooterLink title={link.title} sublinks={link.sublinks} key={nanoid()} />
          ))}
        </article>
        <SocialIcons />
      </m.section>
    </m.footer>
  );
}
