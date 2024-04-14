"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useUser } from "@clerk/clerk-react";
import { redirect } from "next/navigation";

function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  const words = `Welcome to our platform dedicated to the Sustainable Development Goals (SDGs), a set of 17 global objectives established by the United Nations to tackle pressing challenges. By 2030, these goals aim to eradicate poverty, improve health and education, promote gender equality, and more. Our platform offers insights into the SDGs, their measurement, and why they matter. Join us in taking action towards a sustainable and equitable future for all.`;

  /*  if (!isLoaded) {
    // Handle loading state however you like
    return <div>loading</div>;
  } */
  if (isSignedIn) {
    redirect("/task");
  }
  return (
    <div className="bg-neutral-950 relative flex justify-center items-center antialiased h-auto">
      <BackgroundBeams />
      <div className="flex flex-col justify-center items-center">
        <div className="hidden md:block m-10 pt-10">
          {/* Show logo only on medium and larger screens */}
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="logo of the website"
          />
        </div>
        <div className="block md:hidden">
          {/* Show logo only on small screens */}
          <Image
            src="/logo.png"
            width={250}
            height={250}
            alt="logo of the website"
          />
        </div>
        <Link href="/form">
          <div className="m-5 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="bg-transparent text-white flex items-center space-x-2">
              <span>Get started</span>
            </HoverBorderGradient>
          </div>
        </Link>
        <TextGenerateEffect words={words} className="text-white" />
        <h1 className="md:text-6xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
          Sustainable Development Goal (SDG)
        </h1>
        <div className="w-full h-1 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#ffffff"
        />
        <HeroHighlight className="bg-transparent ">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            Empowering individuals to align their daily activities with specific
            SDGs is {"  "}
            <Highlight className="text-black dark:text-white">
              not only practical but also empowering
            </Highlight>
            . Each person has the capacity to contribute to positive change and
            emphasizes the collective effort in achieving shared goals.
          </motion.h1>
        </HeroHighlight>

        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-2xl font-semibold text-white">
                  Sustainable Development <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Global Goals
                  </span>
                </h1>
              </>
            }>
            <Image
              src={`/goals.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-middle-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default Page;
