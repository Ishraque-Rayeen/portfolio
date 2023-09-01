import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import { SiUdemy } from "react-icons/si";
import metaversus from "@/public/Metaversus.png";
import dall_e from "@/public/DALL-E-Clone.png";
import promptopidea from "@/public/Promptopidea.png";
import threads from "@/public/Threads.png";
import logo_black from "@/public/logo_black.png";
import logo_white from "@/public/logo_white.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const logo = { logo_black: logo_black, logo_white: logo_white } as const;

export const experiencesData = [
  {
    title: "Graduated in BCA",
    location: "IGNOU",
    description:
      "I finished the Bachelor Program (BCA) of IGNOU, New Delhi which offers distance learning and so I continued to pursue Master's Program (MCA).",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Learned Web Development",
    location: "Udemy & Youtube",
    description:
      "Self-taught web developer skilled in various web technologies, gained expertise through Udemy courses & Youtube.",
    icon: React.createElement(SiUdemy),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Freelancer",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Metaversus",
    description:
      "Metaversus is a front-end-application uses framer-motion to animate different section of landing page.",
    tags: ["React", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: metaversus,
    github_link: "https://github.com/Ishraque-Rayeen/Metaversus",
  },
  {
    title: "Promptopidea",
    description:
      "Discover & Share AI-Powered Prompts. Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: promptopidea,
    github_link: "https://github.com/Ishraque-Rayeen",
  },
  {
    title: "Dall-E Clone",
    description:
      "Dall-E is a generative AI technology that enables users to create new images with text to graphics prompts.",
    tags: ["React", "MongoDB", "Tailwind", "Open.AI", "Cloudinary"],
    imageUrl: dall_e,
    github_link: "https://github.com/Ishraque-Rayeen/DALL-E_Clone",
  },
  {
    title: "Threads Clone",
    description:
      "Threads — Instagram's text-based conversation app. Threads is where communities come together to discuss everything.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Clerk"],
    imageUrl: threads,
    github_link: "https://github.com/Ishraque-Rayeen/Threads_clone",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
