"use client";
import React from "react";
import "./_project.scss";
import Image from "next/image";
import { WaveIcon } from "@/mock/icons";
import { ProjectList } from "@/mock/projects";
import GlobeIcon from "@/assets/img/projects/globeIcon.svg";

export const Projects = () => {
  return (
    <div className="Project-wrapper" id="projects">
      <div className="project-heading my-4 flex justify-center items-center">
        <h2 className="text-3xl font-bold text-orange capitalize mb-2">
          projects
        </h2>
      </div>
      <ul className="project-cards grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {ProjectList?.map((item, index) => (
          <li
            key={index}
            className=" h-full bg-white rounded-lg shadow-md  overflow-hidden cursor-pointer"
          >
            <figure className="overflow-hidden">
              <a href={item?.url} target="_blank">
                <Image
                  src={item.image}
                  className="max-w-[100%] h-[200px] object-cover hover:scale-110 transition-all duration-500"
                  alt="project-image"
                />
              </a>
            </figure>
            <figcaption className="p-3 relative">
              <div className="absolute top-[-67px] left-[-2px] z-0 w-[142%] h-[75px] overflow-hidden">
                <WaveIcon />
              </div>
              <h2 className="text-black font-bold md:text-lg text-base capitalize flex justify-between items-center ">
                <span> {item.title}</span>
                <a href={item?.url} target="_blank">
                  <Image
                    src={GlobeIcon}
                    width={15}
                    height={15}
                    className="transition-all duration-500 hover:rotate-180 hover:transition-all"
                  />
                </a>
              </h2>
              <p className="text-black font-normal text-sm capitalize py-1">
                {item.content}
              </p>
            </figcaption>
          </li>
        ))}
      </ul>
    </div>
  );
};
