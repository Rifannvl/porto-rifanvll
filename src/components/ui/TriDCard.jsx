"use client";

import Image from "next/image";
import Avatar from "@/assets/ecmrs.png";
import Travel from "@/assets/travel.png";
import Smk from "@/assets/smk.png";
import Yws from "@/assets/yws.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import GradualSpacing from "./gradual-spacing";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <>
      <GradualSpacing
        className="font-display md:mt-2 mt-1 lg:mt-20 mb-2 lg:mb-4 text-3xl sm:text-4xl font-bold -tracking-widest text-center text-black dark:text-white md:text-5xl lg:text-6xl"
        text="Project"
        duration={0.75}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                E-commerce website (project pribadi)
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                01-08-2024
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Avatar}
                  height="800"
                  width="800"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://e-commerce-navy-xi.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://e-commerce-navy-xi.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  next
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Travel website (project pribadi)
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                01-08-2024
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Travel}
                  height="800"
                  width="800"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://web-travel-nine.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://web-travel-nine.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  next
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                SMKN1 SIMRA website (project pribadi)
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                01-08-2024
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Smk}
                  height="800"
                  width="800"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://smkn1-simpangraya.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://smkn1-simpangraya.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  next
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Yowis Coffe website (project pribadi)
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                01-08-2024
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Yws}
                  height="800"
                  width="800"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://yowis-coffe.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://yowis-coffe.vercel.app"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  next
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}
