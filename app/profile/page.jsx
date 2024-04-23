"use client";
import React, { useState } from "react";
import { Vortex } from "@/components/ui/vortex";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button, Input, Image, Link } from "@nextui-org/react";

function Profile() {
  const [bg, setBg] = useState(false);
  const handlePress = () => {
    setBg(!bg);
  };
  return (
    <div className="w-screen h-screen rounded-md overflow-hidden ">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={800}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-screen">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Forge your Profile
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl m-6 text-center">
          Let us know you more
        </p>
        <Card
          isBlurred
          className="border-none text-slate-50 bg-slate-500/20 max-w-[2000px]"
          shadow="sm">
          <CardBody>
            <p className="m-5">Enter your Birthday</p>
            <Input
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-slate-500/20",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-slate-500/40",
                  "group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              type="text"
              label="Birthday"
              placeholder="dd/mm/yyyy"
            />
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 mt-10">
              {ptypes.map((ptype, index) => (
                <Card
                  isBlurred
                  className={`text-slate-50  max-w-[1000px] ${
                    bg ? "bg-red" : " bg-slate-500/20"
                  }  `}
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() => console.log(`card pressed ${index}`)}>
                  <CardBody className="overflow-visible p-0">
                    <Image
                      isZoomed
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={ptype.title}
                      className="w-full object-cover h-[140px]"
                      src={ptype.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{ptype.title}</b>
                    <p className="text-default-500">{ptype.description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button
            href="/taskpro"
            as={Link}
            className="px-4 py-2 bg-natural-100 hover:bg-natural-50 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Go Back
          </Button>
          <Button
            href="/taskpro"
            as={Link}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Submit
          </Button>
        </div>
      </Vortex>
    </div>
  );
}

export default Profile;

const ptypes = [
  {
    title: "ISTJ",
    description: "The Inspector",
    img: "/istj.png",
  },
  {
    title: "ISFJ",
    description: "The Protector",
    img: "/isfj.png",
  },
  {
    title: "INFJ",
    description: "The Counselor",
    img: "/infj.png",
  },
  {
    title: "INTJ",
    description: "The Mastermind",
    img: "/intj.png",
  },
  {
    title: "ISTP",
    description: "The Craftsman",
    img: "/istp.png",
  },
  {
    title: "ISFP",
    description: "The Composer",
    img: "/isfp.png",
  },
  {
    title: "INFP",
    description: "The Healer",
    img: "/infp.png",
  },
  {
    title: "INTP",
    description: "The Architect",
    img: "/intp.png",
  },
  {
    title: "ESTP",
    description: "The Dynamo",
    img: "/estp.png",
  },
  {
    title: "ESFP",
    description: "The Performer",
    img: "/esfp.png",
  },
  {
    title: "ENFP",
    description: "The Champion",
    img: "/enfp.png",
  },
  {
    title: "ENTP",
    description: "The Visionary",
    img: "/entp.png",
  },
  {
    title: "ESTJ",
    description: "The Supervisor",
    img: "/estj.png",
  },
  {
    title: "ESFJ",
    description: "The Provider",
    img: "/esfj.png",
  },
  {
    title: "ENFJ",
    description: "The Teacher",
    img: "/enfj.png",
  },
  {
    title: "ENTJ",
    description: "The Commander",
    img: "/entj.png",
  },
];
