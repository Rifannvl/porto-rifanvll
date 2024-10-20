import GridPattern from "@/components/ui/grid-pattern";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BlurFade from "@/components/ui/blur-fade";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TextRevealByWord from "@/components/ui/text-reveal";
import DockMenus from "@/components/ui/DockMenus";
import { cn } from "@/lib/utils";
import { ExpandableCard } from "@/components/ui/ExpanCard";
import { CardHover } from "@/components/ui/CardHover";
import { BlurInText } from "@/components/ui/BlurInText";
import { MagicCardDemo } from "@/components/ui/MagicCards";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <BlurFade>
        <VelocityScroll
          text={"WEB DEVELOPER "}
          default_velocity={3}
          className="font-display- max-w-full text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[4rem] "
        />
      </BlurFade>
      <div className="z-10 flex flex-col items-center justify-center bg-white dark:bg-black container p-6">
        <TextRevealByWord
          text="Hi! I’m a frontend developer who loves building clean,
          responsive, and user-friendly web interfaces. I enjoy working
          with technologies like JavaScript, React, and CSS to create
          seamless experiences that make users happy.
          While my main focus is on frontend, I also have experience in
          backend development, which helps me understand the full picture
          of a web project. I’m always eager to learn new things, explore
          the latest trends in design, and work on projects that challenge
          me to grow.
          Let’s connect and chat about web development, design, or
          potential collaboration!"
        />
      </div>

      <CardHover />
      <DockMenus className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50" />
      <ExpandableCard />
      <MagicCardDemo />
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );

  function HeroSection() {
    return (
      <section className="container max-w-screen pt-10 grid grid-rows-2 items-center justify-center text-center ">
        {/* <div className="flex justify-center">
          <Link href="/" className="hover:[&_img]:scale-90">
            <Image
              src={avatar}
              alt="hero image"
              width={200}
              height={200}
              className="rounded-full border p-1 transition-all"
            />
          </Link>
        </div> */}
        <BlurInText />
        <div className="flex md:gap-4 md:items-center md:flex-row flex-col mb-6">
          <div>
            <GradualSpacing
              className="font-display mb-2 lg:mb-4 text-xl sm:text-3xl font-bold -tracking-widest text-center text-neutral-700 dark:text-white md:text-3xl lg:text-5xl"
              text="Frontend Developer"
              duration={0.75}
            />
            <ul className="list-disc pl-2 flex ms-7 flex-wrap">
              <BlurFade>
                <li className="mr-8 mb-1 text-sm md:text-base">
                  Web Developer
                </li>
              </BlurFade>

              <BlurFade delay={0.25}>
                <li className="mr-8 mb-1 text-sm md:text-base">
                  Remote worker
                </li>
              </BlurFade>

              <BlurFade delay={0.5}>
                <li className="mr-8 mb-1 text-sm md:text-base">
                  <div className="flex gap-2">Based in Yogyakarta </div>
                </li>
              </BlurFade>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
