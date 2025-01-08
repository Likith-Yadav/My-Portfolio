"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="flex flex-row gap-3">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Full Stack Developer
            </h1>
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              MERN Developer
            </h1>
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Likith Yadav {" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m an AIML student at MVJCE Bangalore with a passion for full stack development
          and artificial intelligence. Experienced in MERN stack, UI/UX design, and AI technologies.
          Former intern at Torix Pvt Ltd where I honed my design skills. I love turning innovative ideas
          into reality through code.
        </motion.p>
        <motion.div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href='/resume.pdf'
            download='Likith_Yadav_Resume.pdf'
            className="py-3 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
