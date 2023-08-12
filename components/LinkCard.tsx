"use client";

import Image from "next/image";
import Button from "./Button";
import { motion as m } from "framer-motion";

interface Props {
  shortLink: string;
  originalLink: string;
  removeLink: (link: string) => void;
  clipboard: string;
  setClipboard: (clipboard: string) => void;
}

export default function LinkCard({
  shortLink,
  originalLink,
  removeLink,
  clipboard,
  setClipboard,
}: Props) {
  function handleCopy(id: string, url: string) {
    setClipboard(id);
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="bg-white pb-[16px] pt-[6px] md:py-[16px] md:pl-[32px] md:pr-[24px] flex justify-between md:items-center flex-col md:flex-row max-w-[1110px] mx-auto w-full rounded-[5px]">
      <div className="flex justify-between w-full px-[16px] md:px-[0px]">
        <h2 className="text-[16px] leading-[36px] tracking-[0.12px] font-medium text-dark-violet">
          {originalLink}
        </h2>
        <Image
          src={"/icon-close.svg"}
          alt="close-icon"
          width={12}
          height={12}
          onClick={() => removeLink(originalLink)}
          className="cursor-pointer md:hidden"
        />
      </div>
      <div className="md:hidden border-b-[1px] border-b-gray w-full pt-[6px] mb-[6px]" />
      <article className="flex md:items-center flex-col w-full justify-end md:flex-row gap-x-[24px] px-[16px] md:px-[0px] gapy-[8px]">
        <a target="_blank" href={shortLink} className="text-[16px] leading-[36px] pb-[8px] md:pb-0 tracking-[0.12px] font-medium text-cyan hover:underline">
          {shortLink}
        </a>

        <div
          onClick={() => handleCopy(originalLink, shortLink)}
          className="w-full md:max-w-[103px]"
        >
          <Button
            variant="detailed"
            delay={0}
            rounded="tiny"
            isCopyButton={true}
            text={clipboard === originalLink ? "Copied!" : "Copy"}
            size="w-full h-[40px] md:max-w-[103px]"
          />
        </div>

        <Image
          src={"/icon-close.svg"}
          alt="close-icon"
          width={12}
          height={12}
          onClick={() => removeLink(originalLink)}
          className="cursor-pointer hidden md:block"
        />
      </article>
    </div>
  );
}
