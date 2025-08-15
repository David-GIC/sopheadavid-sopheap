import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Internship as Mobile Developer at IntechDev Co,. LTD",
    location: "Full Time ~ Phnom Penh, Cambodia",
    description:
      "After finsh 4th years, School required student to find a company for internship. I immediately found a internship job as a Mobile Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2019 ~ Sep 2019",
  },
  {
    title: "Mobile Developer at IntechDev Co,. LTD",
    location: "Full Time ~ Phnom Penh, Cambodia",
    description:
      "After internship successfully, I get promoted to full staff as a Mobile Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2019 ~ Oct 2022",
  },
  {
    title: "Mobile Developer at MakCircle Co,. LTD",
    location: "Freelancer ~ Phnom Penh, Cambodia",
    description:
      "During my full time job, I was hired by client to create a mobile application for them.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 ~ Feb 2021",
  },
  {
    title: "Senoir Mobile Developer at Collabonet Co,. LTD",
    location: "Freelancer ~ Phnom Penh, Cambodia",
    description:
      "During my full time job, I was hired by client to create a mobile application for them.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 ~ Nov 2023",
  },
  {
    title: "Senoir Mobile Developer | Backend Developer at IntechDev Co,. LTD",
    location: "Full Time ~ Phnom Penh, Cambodia",
    description:
      "After worked 3 years as a Mobile Developer, I get promoted to Senoir Mobile Developer and I also work on Backend Side to develop some API for Mobile and Web application.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 ~ Oct Jan 2024",
  },
  {
    title: "Tech Lead at IntechDev Co,. LTD",
    location: "Full Time ~ Phnom Penh, Cambodia",
    description:
      "After worked 1 year and 4 months as a Senoir Mobile Developer and Backend Developer, I get promoted to Tech Lead. As Tech Lead, I'm leading team, task assign, project planing, mobile app development, web developerment, backend development, make a weekly report to CTO.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 ~ Sep Jan 2024",
  },
  {
    title: "Mobile Developer at Wing Bank",
    location: "Full Time ~ Phnom Penh, Cambodia",
    description:
      "After worked 5 years at IntechDev, I decided to leave my comfort zone and joined Innovation team at Wing Bank.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 ~ Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Mobile App Development",
  "Flutter",
  "Swift",
  "Java/Kotlin",
  "Firebase",
  "Firestore",
  "Firebase Remote Config",
  "Firebase Cloud Storage",
  "Firebase Hosting",
  "Marven Nexus Repository",
  "TestFairy",
  "Git",
  "Cloud Function",
  "Swift Package Manager (SPM)",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "Express",
  "Next.js",
  "Tailwind",
  "HTML",
  "CSS",
] as const;
