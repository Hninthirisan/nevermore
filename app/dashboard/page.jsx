"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Chip, Avatar, Button, Link } from "@nextui-org/react";

export default function LampDemo() {
  const projects = [
    {
      title: "No poverty",
      description:
        "End all forms of poverty by ensuring access to basic services and economic opportunities for all, especially the most vulnerable.",
      value: 30,
      color: "danger",
      label: "Goal 1",
    },
    {
      title: "Zero hunger",
      description:
        "Ensure access to nutritious food for all people, end hunger, improve food security, and promote sustainable agriculture.",
      value: 60,
      color: "warning",
      label: "Goal 2",
    },
    {
      title: "Good health and well-being",
      description:
        "Ensure healthy lives and promote well-being for all at all ages, improve access to healthcare services, and reduce the burden of disease.",
      value: 80,
      color: "success",
      label: "Goal 3",
    },
    {
      title: "Quality Education",
      description:
        "Ensure inclusive and equitable quality education for all, promote lifelong learning opportunities, and provide access to education for everyone.",
      value: 50,
      color: "warning",
      label: "Goal 4",
    },
    {
      title: "Gender equality",
      description:
        "Achieve gender equality and empower all women and girls by eliminating discrimination, ensuring equal rights and opportunities, and promoting women's participation in decision-making processes.",
      value: 90,
      color: "success",
      label: "Goal 5",
    },
    {
      title: "Clean water and sanitation",
      description:
        "Ensure access to clean water and sanitation for all, improve water quality, and achieve universal access to adequate and equitable sanitation and hygiene.",
      value: 20,
      color: "danger",
      label: "Goal 6",
    },
    {
      title: "Affordable and clean energy",
      description:
        "Ensure access to affordable, reliable, sustainable, and modern energy for all, promote renewable energy sources, and increase energy efficiency.",
      value: 50,
      color: "warning",
      label: "Goal 7",
    },
    {
      title: "Decent work and economic growth",
      description:
        "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
      value: 80,
      color: "success",
      label: "Goal 8",
    },
    {
      title: "Industry, innovation and infrastructure",
      description:
        "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation to support sustainable development.",
      value: 86,
      color: "success",
      label: "Goal 9",
    },
    {
      title: "Reduced inequalities",
      description:
        "Reduce income inequality within and among countries, promote social inclusion, and ensure equal opportunities for all, regardless of age, sex, disability, race, ethnicity, origin, religion, economic or other status.",
      value: 75,
      color: "success",
      label: "Goal 10",
    },
    {
      title: "Sustainable cities and economies",
      description:
        "Make cities and human settlements inclusive, safe, resilient, and sustainable, improve urban planning and management, and provide access to affordable and sustainable transportation.",
      value: 40,
      color: "warning",
      label: "Goal 11",
    },
    {
      title: "Responsible consumption and production",
      description:
        "Ensure sustainable consumption and production patterns, reduce waste generation, and promote efficient use of natural resources.",
      value: 20,
      color: "danger",
      label: "Goal 12",
    },
    {
      title: "Climate action",
      description:
        "Take urgent action to combat climate change and its impacts, strengthen resilience and adaptive capacity to climate-related hazards and natural disasters.",
      value: 30,
      color: "danger",
      label: "Goal 13",
    },
    {
      title: "Life below water",
      description:
        "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development, protect marine and coastal ecosystems, and reduce marine pollution.",
      value: 60,
      color: "warning",
      label: "Goal 14",
    },
    {
      title: "Life on land",
      description:
        "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
      value: 80,
      color: "success",
      label: "Goal 15",
    },
    {
      title: "Peace, justice and strong institutions",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
      value: 75,
      color: "success",
      label: "Goal 16",
    },
    {
      title: "Partnership for the goals",
      description:
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development, enhance international cooperation, and support developing countries in achieving the SDGs.",
      value: 89,
      color: "success",
      label: "Goal 17",
    },
  ];
  const people = [
    {
      id: 1,
      name: "Hnin Thiri San",
      designation: "Data Scientist",
      image: "/hts.png",
    },
    {
      id: 2,
      name: "Nang Phaung Mwe Sein",
      designation: "UI UX Designer",
      image: "/phaung.png",
    },
    {
      id: 3,
      name: "Nang Zin Moon Shien",
      designation: "Marketing and Sales",
      image: "/cherry.png",
    },
  ];

  return (
    <div className=" bg-slate-950">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -150 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          NEVERMORE
        </motion.h1>
      </LampContainer>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex flex-col justify-center items-center gap-9">
        <Chip
          classNames={{
            base: "bg-gradient-to-br from-red-500 to-blue-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
          size="lg"
          variant="flat"
          avatar={<Avatar name="JW" src="/hts.png" />}>
          51 Energy related tasks have done
        </Chip>{" "}
        <Chip
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-green-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
          size="lg"
          variant="flat"
          avatar={<Avatar name="JW" src="/cherry.png" />}>
          5 partnership tasks have done
        </Chip>
        <Chip
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
          size="lg"
          variant="flat"
          avatar={<Avatar name="JW" src="/phaung.png" />}>
          31 community engagement tasks have done
        </Chip>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button href="/taskpro" as={Link} className="flex max-w-40">
          Back to Task
        </Button>
        <h2 className="flex max-w-200 text-neutral-500 w-100 mb-20 mt-10">
          Copy Rights 2024 © NEVERMORE.INC
        </h2>
      </div>
    </div>
  );
}
