"use client"

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[25px] font-bold">
            Projects
          </h1>
        </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          className="w-full md:w-1/3"
          src="/aigenz.png"
          title="AI-GenZ Image Generator"
          description="An AI-powered image generator that creates unique images based on user prompts. Built using OpenAI's DALL-E API and Next.js for a seamless user experience."
        />
        <ProjectCard
          className="w-full md:w-1/3"
          src="/resume-builder.png"
          title="Smart Resume Builder"
          description="A dynamic resume and cover letter generator that creates professional documents based on user input. Features multiple templates and real-time preview."
        />
        <ProjectCard
          className="w-full md:w-1/3"
          src="/chat-app.png"
          title="Real-time Chat Application"
          description="A full-stack chat application with room functionality. Users can create or join rooms using unique codes and engage in real-time discussions. Built with MERN stack and Socket.io."
        />
      </div>
    </div>
  );
};

export default Projects;
