"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div className="w-full  ">
      <div ref={targetRef} className={cn("relative z-0 h-[115vh]", className)}>
        <div
          className={
            "sticky top-0  grid grid-flow-row h-[50%] max-w-screen items-start bg-transparent px-[1rem] py-[5rem]"
          }
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-start lg:text-5xl md:text-4xl text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            About me
          </span>
          <p
            ref={targetRef}
            className={
              "flex flex-wrap text-xs font-light text-black/20 dark:text-white/20  md:text-sm py-4  lg:text-lg xl:text-xl"
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 9]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
