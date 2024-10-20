import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Target } from "lucide-react";
import GradualSpacing from "./gradual-spacing";

export function CardHover() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <GradualSpacing
        className="font-display mb-2 mt-5 lg:mb-4 text-xl sm:text-3xl font-bold -tracking-widest text-center text-neutral-700 dark:text-white md:text-3xl lg:text-5xl"
        text="Project Rifan"
        duration={0.75}
      />
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
