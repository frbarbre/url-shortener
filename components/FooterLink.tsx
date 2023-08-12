import { nanoid } from "nanoid";

interface Props {
  title: string;
  sublinks: string[];
}

export default function FooterLink({ title, sublinks }: Props) {
  return (
    <article>
      <h3 className="pb-[22px] text-white font-bold tracking-[-0.25px]">{title}</h3>
      <ul className="flex flex-col gap-[10px] text-[#BFBFBF] font-medium text-[15px] tracking-[-0.23px]">
        {sublinks.map((link) => (
          <li key={nanoid()}>{link}</li>
        ))}
      </ul>
    </article>
  );
}
