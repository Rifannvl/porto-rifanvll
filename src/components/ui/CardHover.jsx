import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Target } from "lucide-react";
import GradualSpacing from "./gradual-spacing";
import { cn } from "@/lib/utils";

export function CardHover() {
  return (
    <div className={cn("mx-auto")}>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React Js",
    image: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
    link: "https://react.dev",
  },
  {
    title: "Next Js",
    image:
      "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
    link: "https://nextjs.org",
  },
  {
    title: " Javascript",
    image:
      "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    link: "https://www.w3schools.com/js/",
  },
  {
    title: "Node Express",
    image: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",

    link: "https://expressjs.com",
  },
  {
    title: " Tailwind",
    image:
      "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",

    link: "https://tailwindcss.com ",
  },
  {
    title: "Bootsrap",
    image:
      "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",

    link: "https://getbootstrap.com ",
  },
  {
    title: "Html",
    image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",

    link: "https://www.w3schools.com/html/",
  },
  {
    title: "Css",
    image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",

    link: "https://www.w3schools.com/css/",
  },
];
