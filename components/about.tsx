"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm SOPHEAP Sopheavid! I'm from Kampong Cham province and I graduated with an Engineer's degree from <span className="font-medium">Institute of Technology of Cambodia</span> majoring <span className="font-medium">Computer Science</span>.
      </p>

      <p className="mb-3">
        I'm a dedicated <span className="font-medium">mobile developer</span> with a passion for creating innovative applications and with a strong focus on creating beautiful and efficient apps using the Flutter framework. I love bringing ideas to life through code, crafting user-friendly interfaces, and ensuring seamless user experiences across both Android and iOS platforms.
        With a solid foundation in Flutter, I've developed a range of mobile applications that are not only functional but also visually appealing.
      </p>

      <p className="mb-3">
        I believe in writing clean, maintainable code and continuously learning to keep up with the latest trends and technologies in mobile development.
      </p>

      <p>
        When I'm not coding, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
