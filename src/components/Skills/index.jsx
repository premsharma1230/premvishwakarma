"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { themeContext } from "@/utils/Context";
import { SkillsList } from "@/mock/skills";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="skills-wrapper mt-4" id="skills">
        <div className="skills-heading my-4 flex justify-center items-center">
          <h2 className="text-3xl font-bold text-orange capitalize mb-2">
            skills
          </h2>
        </div>
        <div className="skills-cards">
          <ul className="skills-content-wrapper">
            {SkillsList?.map((item, index) => (
              <li className="shadow-lg border border-solid p-4 rounded-lg relative">
                <h2 className="text-lg text-orange pb-3 font-semibold">
                  {item.title}
                </h2>
                <div className="blur-anime"></div>
                <div
                  key={index}
                  className={`grid ${item.className} relative  overflow-hidden   gap-3`}
                >
                  {item.languageList.map((lagItem, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg overflow-hidden w-[76px] border-[${lagItem?.borderColor}]`}
                    >
                      <Image
                        src={lagItem?.image}
                        className="w-full h-[50px] rounded-lg hover:scale-110 transition-all duration-500"
                        alt="image"
                      />
                      <p
                        className={`${
                          darkMode ? "text-[white!important]" : ""
                        }"text-black font-bold text-xs py-2 px-2 text-center"`}
                      >
                        {lagItem.name}
                      </p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Skills;
