"use client";

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
    <div>
      <p>
        {shortLink}, {originalLink}
      </p>
      <p onClick={() => handleCopy(originalLink, shortLink)}>
        {clipboard === originalLink ? "Copied!" : "Copy"}
      </p>
      <p onClick={() => removeLink(originalLink)}>Remove Link</p>
    </div>
  );
}
