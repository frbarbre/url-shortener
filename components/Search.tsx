"use client";

import { API, URL } from "@/types";
import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { nanoid } from "nanoid";
import Button from "./Button";
import { motion as m } from "framer-motion";
import ErrorMessage from "./ErrorMessage";

export default function Search() {
  let storageString;

  if (typeof window !== "undefined") {
    storageString = sessionStorage.getItem("url");
  }

  const [inputValue, setInputValue] = useState("");
  const [linksArray, setLinksArray] = useState<URL[] | []>(
    storageString ? JSON.parse(storageString) : []
  );

  const [clipboard, setClipboard] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("url", JSON.stringify(linksArray));
  }, [linksArray]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue !== "") {
      setError(false);
      try {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data = await res.json();
        const url = data.result as API;

        setLinksArray([
          {
            shortLink: url.full_short_link,
            originalLink: url.original_link,
          },
          ...linksArray,
        ]);
        setInputValue("");
      } catch (error: any) {
        setError(true);
        setErrorMessage(`"${inputValue}" is not a valid url`);
      }
    } else {
      setError(true);
      setErrorMessage("Please add a link");
    }
  }

  function handleReset() {
    setLinksArray([]);
    setClipboard("");
  }

  function removeLink(id: string) {
    setLinksArray(linksArray.filter((link) => link.originalLink !== id));
  }

  return (
    <section className="relative">
      <m.form
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0 }}
        onSubmit={handleSubmit}
        className="rounded-[10px] bg-violet p-[24px] md:py-[52px] md:px-[64px] bg-short-mobile relative md:bg-short-desktop bg-contain bg-right-top z-10 max-w-[1110px] mx-auto md:bg-cover bg-no-repeat flex flex-col md:flex-row gap-x-[24px] gap-y-[16px]"
      >
        <div className="w-full">
          <input
            type="text"
            value={inputValue}
            placeholder="Shorten a link here..."
            onChange={(e) => setInputValue(e.target.value)}
            className={`font-medium border-[3px] box-border leading-[36px] tracking-[0.12px] md:tracking-[0.15px] md:text-[20px] px-[16px] outline-none py-[3px] md:px-[32px] md:py-[11px] rounded-[5px] md:rounded-[10px] w-full ${
              error ? "border-red placeholder:text-red/50" : "border-white"
            }`}
          />
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
        <Button
          text="Shorten it!"
          delay={0}
          variant="detailed"
          rounded="tiny"
          fontSize="text-[18px] md:text-[20px]"
          size="md:max-w-[188px] w-full h-[48px] md:h-[64px]"
          type="submit"
        />
      </m.form>
      {isClient && (
        <m.article
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0 }}
          className="flex flex-col gap-[24px] py-[24px] w-full md:gap-[16px]"
        >
          {linksArray.map((link) => (
            <LinkCard
              shortLink={link.shortLink}
              originalLink={link.originalLink}
              clipboard={clipboard}
              setClipboard={setClipboard}
              removeLink={removeLink}
              key={nanoid()}
            />
          ))}
          {linksArray.length !== 0 && (
            <div onClick={handleReset} className="mx-auto">
              <Button
                rounded="full"
                delay={0.9}
                text="Reset"
                variant="detailed"
                size="h-[40px] w-[105px]"
                fontSize="text-[14px] md:text-[16px]"
                bg="bg-red"
                bgHex="#F46363"
                bgHover="#F47C7C"
              />
            </div>
          )}
        </m.article>
      )}
      <div className="absolute top-0 -left-[24px] -right-[24px] md:-right-[48px] md:-left-[48px] h-[80px] md:h-[84px] bg-white" />
    </section>
  );
}
