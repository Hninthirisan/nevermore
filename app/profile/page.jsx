"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { useState } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { SegmentedControl } from "@mantine/core";
import { Card, Image, Text } from "@mantine/core";
import { Center, SimpleGrid } from "@mantine/core";

function Profile() {
  const [value, setValue] = useState();

  return (
    <div className="h-auto w-full bg-black  bg-dot-white/[0.2]  relative flex flex-col items-center justify-center ">
      <div className="absolute pointer-events-none inset-0 flex justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <h1 className="flex text-white text-center text-5xl mt-20">
        Profile Creation
      </h1>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] text-slate-100 mt-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>

      <MantineProvider>
        <div className="w-screen max-w-3xl flex-auto overflow-hidden rounded-3xl bg-gradient-to-r from-[#2acaff4c] to-[#2a2eff4c] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 flex flex-col justify-center p-10 m-10">
          <div className="rounded-2xl bg-gradient-to-r from-[#2acaff4c] to-[#2a2eff4c] mb-5">
            <DateInput
              className="w-full m-1 pl-10 "
              value={value}
              onChange={setValue}
              placeholder="Select your Birthday"
              size="lg"
              radius="lg"
              variant="unstyled"
              clearable
            />
          </div>
          <SimpleGrid cols={2} spacing="lg">
            <Center>
              <Card
                shadow="lg"
                padding="xl"
                component="button"
                target="_blank"
                radius="lg"
                bg="rgba(125, 129, 255, 0.06)">
                <Card.Section>
                  <Image src="/logo.png" h={160} alt="No way!" mt="xl" />
                </Card.Section>
                <Text fw={500} size="lg" mt="xs" c="rgba(125, 229, 255, 0.8)">
                  Aquarious
                </Text>
                <Text fw={500} size="xs" c="rgba(125, 129, 255, 1)">
                  Zodiac
                </Text>
              </Card>
            </Center>
            <Center>
              <Card
                shadow="lg"
                padding="xl"
                component="button"
                target="_blank"
                radius="lg"
                bg="rgba(125, 129, 255, 0.06)">
                <Card.Section>
                  <Image src="/logo.png" h={160} alt="No way!" mt="xl" />
                </Card.Section>
                <Text fw={500} size="lg" mt="xs" c="rgba(125, 229, 255, 0.8)">
                  SUNDAY
                </Text>
                <Text fw={500} size="xs" c="rgba(125, 129, 255, 1)">
                  Born
                </Text>
              </Card>
            </Center>
          </SimpleGrid>

          <SegmentedControl
            color="rgba(76, 156, 176, 0.8)"
            radius="lg"
            size="xl"
            mt="xl"
            data={["Male", "Female", "Other"]}
            bg="rgba(125, 129, 255, 0.25)"
          />

          <div className="flex justify-center">
            <Text fw={500} size="xl" mt="lg" c="white">
              Select your personality
            </Text>
          </div>
          <div className="bg-[#9f5b5b0e] flex justify-between mt-5 rounded-3xl">
            <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
              {ptypes.map((ptype, j) => (
                <Card
                  key={j}
                  shadow="sm"
                  padding="md"
                  component="button"
                  target="_blank"
                  radius="lg"
                  bg="rgba(125, 129, 255, 0.06)"
                  withBorder>
                  <Card.Section>
                    <Image src={ptype.img} h={160} alt="No way!" mt="xl" />
                  </Card.Section>
                  <Text fw={500} size="lg" mt="xs" c="rgba(125, 229, 255, 0.8)">
                    {ptype.title}
                  </Text>
                  <Text fw={500} size="xs" c="rgba(125, 129, 255, 1)">
                    {ptype.description}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </div>
          <div className="flex justify-end">
            <Button
              variant="filled"
              color="gray"
              size="lg"
              radius="lg"
              mt="lg"
              mr="lg">
              Cancel
            </Button>
            <Button
              variant="gradient"
              gradient={{
                from: "rgba(125, 129, 255, 0.66)",
                to: "cyan",
                deg: 58,
              }}
              size="lg"
              radius="lg"
              mt="lg">
              Confirm
            </Button>
          </div>
        </div>
      </MantineProvider>

      <div className="h-20"></div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-black/[0.2]  [mask-image:radial-gradient(ellipse_at_center,black,transparent)]  border  border-black/[0.2] bg-[#00d5ff40] "></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-100" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-100" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-100" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-100" />,
  },
];

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

export default Profile;
