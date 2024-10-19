import { HoverEffect } from "./card-hover-effect";
import Image from "next/image";
import avatar from "@/assets/avatardemo.png";
import Link from "next/link";

export function CardHover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {},
  {
    image:
      "https://my-portofolio-web-bay.vercel.app/assets/profile-br77KJ1I.svg",
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];
