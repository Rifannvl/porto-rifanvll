"use client"; // Tambahkan ini di bagian atas file

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import GridPattern from "./grid-pattern";
import GradualSpacing from "./gradual-spacing";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const displayedItems = expanded ? items : items.slice(0, 4); // Menampilkan 4 item jika tidak diperluas

  return (
    <div className={cn("mx-auto ", className)}>
      <h2 className="lg:text-5xl  text-neutral-700 text-xl sm:text-3xl md:text-3xl font-bold mt-4 lg:mt-6 xl:mt-8 mb-2 lg:mb-4 ">
        My Skill
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {displayedItems.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.link}
            target="_blank"
            className="relative group block py-2 h-full w-full lg:h-60 lg:w-64"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-900 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card
              className={cn(
                "bg-gradient-to-tl from-green-800 to-40% via-neutral-900"
              )}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardImage className="z-20">{item.image}</CardImage>
              <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                  "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] z-10 backdrop:blur-xl"
                )}
              />
            </Card>
          </Link>
        ))}
      </div>
      {/* Tombol Expand */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 mb-5 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
      >
        {expanded ? "Lihat Lebih Sedikit" : "Lihat Selanjutnya"}
      </button>
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent bg-neutral-900 opacity-60 hover:opacity-100 dark:bg-black/30 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({ className, src, alt, children }) => {
  return (
    <div className={cn("flex justify-center items-center")}>
      <img
        className={cn("max-w-full h-full mt-8", className)}
        src={children} // Menggunakan prop src
        alt={alt} // Menggunakan prop alt
      />
    </div>
  );
};
