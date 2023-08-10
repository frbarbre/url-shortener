"use client";

import { API, URL } from "@/types";
import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { nanoid } from "nanoid";

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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("url", JSON.stringify(linksArray));
  }, [linksArray]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue !== "") {
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
      }
    } else {
      console.log("cant be empty");
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
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search for at valid url"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isClient && (
        <>
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
        </>
      )}
    </section>
  );
}
