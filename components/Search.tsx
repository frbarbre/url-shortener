"use client";

import { API, URL } from "@/types";
import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { nanoid } from "nanoid";
import Button from "./Button";

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
        console.log(`Not valid url: ${inputValue}`);
        setError(true);
      }
    } else {
      console.log("cant be empty");
      setError(true);
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
      <form
        onSubmit={handleSubmit}
        className="rounded-[10px] bg-violet p-[24px] md:py-[52px] md:px-[64px] bg-short-mobile relative md:bg-short-desktop bg-contain bg-right-top z-10 max-w-[1110px] mx-auto md:bg-cover bg-no-repeat flex flex-col md:flex-row gap-x-[24px] gap-y-[16px]"
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Shorten a link here..."
          onChange={(e) => setInputValue(e.target.value)}
          className={`font-medium border-[3px] box-border leading-[36px] tracking-[0.12px] md:tracking-[0.15px] md:text-[20px] px-[16px] outline-none py-[3px] md:px-[32px] md:py-[11px] rounded-[5px] md:rounded-[10px] w-full ${
            error ? "border-red" : "border-white"
          }`}
        />
        <Button
          text="Shorten it!"
          delay={0}
          variant="detailed"
          rounded="tiny"
          fontSize="text-[18px] md:text-[20px]"
          size="md:max-w-[188px] w-full h-[48px] md:h-[64px]"
          type="submit"
        />
      </form>
      {isClient && (
        <article className="flex flex-col gap-[24px] py-[24px] w-full md:gap-[16px]">
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
          {linksArray.length !== 0 && <p onClick={handleReset}>Reset</p>}
        </article>
      )}
      <div className="absolute top-0 -left-[24px] -right-[24px] md:-right-[48px] md:-left-[48px] h-[80px] md:h-[84px] bg-white" />
    </section>
  );
}
