"use client";
import Image from "next/image";
import Ecmrs from "@/assets/ecmrs.png";
import Travel from "@/assets/travel.png";
import Smk from "@/assets/smk.png";
import Yws from "@/assets/yws.png";
import GradualSpacing from "./gradual-spacing";
import BlurFade from "./blur-fade";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/blocks/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // Jumlah kartu awal
  const [showMore, setShowMore] = useState(false); // State untuk menampilkan kartu tambahan
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleToggleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle state untuk menampilkan kartu tambahan
  };

  return (
    <div className="">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(0px)" }}
            className="fixed inset-0 bg-black/70 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-neutral-800 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div>
        <ul className="list-disc pl-2 flex flex-wrap">
          <BlurFade>
            <div className=" mb-2 mt-5">
              <h2 className="lg:text-5xl lg:mb-4 text-xl sm:text-3xl dark:text-white md:text-3xl font-bold text-neutral-700">
                Project Rifan
              </h2>
              <li className="ms-8 mb-1 text-sm md:text-base">
                Showcasing some my completed projects
              </li>
            </div>
          </BlurFade>
        </ul>
      </div>
      <ul className="max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
        {cards
          .slice(0, showMore ? cards.length : visibleCount)
          .map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
      </ul>
      <div className="flex justify-end">
        <button
          onClick={handleToggleShowMore}
          className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
        >
          {showMore ? "Lihat Lebih Sedikit" : "Lihat Berikutnya"}
        </button>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "01-08-2024",
    title: "Ecommerce (project mandiri)",
    src: Ecmrs,
    ctaText: "Visit",
    ctaLink: "https://e-commerce-navy-xi.vercel.app",
    content: () => (
      <p>Ecommerce app project mandiri sebagai tugas akhir di neuversity</p>
    ),
  },
  {
    description: "01-09-2024",
    title: "Web Travel (project mandiri)",
    src: Travel,
    ctaText: "Visit",
    ctaLink: "https://web-travel-nine.vercel.app",
    content: () => <p>Membuat web travel sebagai tugas akhir di neuversity</p>,
  },
  {
    description: "01-04-2024",
    title: "Smk Negeri 1 Simra",
    src: Smk,
    ctaText: "Visit",
    ctaLink: "https://smkn1-simpangraya.vercel.app",
    content: () => <p>Membuat web SMK Negeri 1 Simpang Raya</p>,
  },
  {
    description: "01-06-2024",
    title: "Yowis Coffee",
    src: Yws,
    ctaText: "Visit",
    ctaLink: "https://yowis-coffe.vercel.app",
    content: () => <p>Membuat web untuk cafe Yowis Coffee</p>,
  },
];
