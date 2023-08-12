import { motion as m } from "framer-motion";

export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <m.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:absolute md:bottom-[26px] text-[12px] md:text-[16px] pt-[4px] md:pt-[0px] text-red font-medium italic tracking-[0.08px] md:tracking-[0.11px] leading-[18px]"
    >
      {children}
    </m.p>
  );
}
