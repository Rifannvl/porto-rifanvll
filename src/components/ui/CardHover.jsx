import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Target } from "lucide-react";

export function CardHover() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        My Skill
      </span>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React Js",
    image: "https://img.icons8.com/?size=200&id=123603&format=png&color=000000",
    link: "https://react.dev",
  },
  {
    title: "Next Js",
    image:
      "https://img.icons8.com/?size=200&id=MWiBjkuHeMVq&format=png&color=000000",
    link: "https://nextjs.org",
  },
  {
    title: "Tailwind",
    image:
      "https://img.icons8.com/?size=200&id=CIAZz2CYc6Kc&format=png&color=000000",
    link: "https://tailwindcss.com",
  },
  {
    title: "Bootstrap",
    image:
      "https://img.icons8.com/?size=200&id=EzPCiQUqWWEa&format=png&color=000000",

    link: "https://getbootstrap.com",
  },
  {
    title: "Javascript",
    image:
      "https://img.icons8.com/?size=200&id=PXTY4q2Sq2lG&format=png&color=000000",

    link: "https://www.w3schools.com/js/",
  },
  {
    title: "Html",
    image: "https://img.icons8.com/?size=200&id=20909&format=png&color=000000",

    link: "https://www.w3schools.com/html/",
  },
];
