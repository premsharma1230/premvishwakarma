"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { themeContext } from "@/utils/Context";
// import { SkillsList } from "@/mock/skills";
import JSImage from "@/assets/img/skillsImage/js.png";
import TsImage from "@/assets/img/skillsImage/ts.png";
import HTMLImage from "@/assets/img/skillsImage/html.png";
import ReactJsImage from "@/assets/img/skillsImage/reactjs.png";
import NextJsImage from "@/assets/img/skillsImage/nextjs.png";
import ReduxImage from "@/assets/img/skillsImage/redux.png";
import RemixImage from "@/assets/img/skillsImage/remixjs.png";
import GraphQLImage from "@/assets/img/skillsImage/GraphQL.png";
import JQueryImage from "@/assets/img/skillsImage/jquery.png";
import CssImage from "@/assets/img/skillsImage/css.png";
import SCssImage from "@/assets/img/skillsImage/scss.png";
import LessImage from "@/assets/img/skillsImage/less.png";
import AntdImage from "@/assets/img/skillsImage/antd.png";
import BootstrapImage from "@/assets/img/skillsImage/bootstrap.png";
import TailwindImage from "@/assets/img/skillsImage/tailwind.png";
import MuiImage from "@/assets/img/skillsImage/mui.png";
import FrameworksImage from "@/assets/img/skillsImage/frameworks.png";
// version--controls
import GitImage from "@/assets/img/skillsImage/git.png";
import BitBucketImage from "@/assets/img/skillsImage/bitbucket.png";
import SourceTreeImage from "@/assets/img/skillsImage/sourceTree.png";
import JenkinsImage from "@/assets/img/skillsImage/Jenkins.png";
import GitLabImage from "@/assets/img/skillsImage/gitLab.png";
// Agile
import Jiramage from "@/assets/img/skillsImage/jira.png";
import Trelloamage from "@/assets/img/skillsImage/trello.png";

const SkillsList = [
  {
    title: "Languages",
    className: "lg:grid-cols-3 grid-cols-2",
    languageList: [
      { name: "Javascript", image: JSImage, borderColor: "#FFF65C" },
      { name: "Typscript", image: TsImage, borderColor: "#328FCC" },
      { name: "HTML", image: HTMLImage, borderColor: "#EC713F" },
    ],
  },
  {
    title: "Library and Frameworks",
    className: "lg:grid-cols-8 md:grid-cols-4 grid grid-cols-2",
    languageList: [
      { name: "React Js", image: ReactJsImage },
      { name: "Next Js", image: NextJsImage },
      { name: "Redux (ToolKit)", image: ReduxImage },
      { name: "Remix Js", image: RemixImage },
      { name: "GraphQL", image: GraphQLImage },
      { name: "JQuery", image: JQueryImage },
      { name: "CSS", image: CssImage },
      { name: "SCSS", image: SCssImage },
      { name: "LESS", image: LessImage },
      { name: "Ant Design", image: AntdImage },
      { name: "Tailwind", image: TailwindImage },
      { name: "Bootstrap", image: BootstrapImage },
      { name: "MUI", image: MuiImage },
      { name: "Other Frameworks", image: FrameworksImage },
    ],
  },
  {
    title: "Version Controls",
    className: "lg:grid-cols-4 md:grid-cols-3  grid grid-cols-2",
    languageList: [
      { name: "Git", image: GitImage },
      { name: "Bit-bucket", image: BitBucketImage },
      { name: "Source Tree", image: SourceTreeImage },
      { name: "Jenkins", image: JenkinsImage },
      { name: "GitLab", image: GitLabImage },
    ],
  },
  {
    title: "Agile",
    className: "lg:grid-cols-3  grid grid-cols-2",
    languageList: [
      { name: "Jira", image: Jiramage },
      { name: "Trello", image: Trelloamage },
    ],
  },
];
export const SkillSection = () => {
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
              <li
                key={index}
                className="shadow-lg border border-solid p-4 rounded-lg relative"
              >
                <h2 className="text-lg text-orange pb-3 font-semibold">
                  {item.title}
                </h2>
                <div className="blur-anime"></div>
                <div
                  className={`grid ${item.className} relative  overflow-hidden   gap-3`}
                >
                  {item.languageList.map((lagItem, id) => (
                    <div
                      key={id}
                      className={`border rounded-lg overflow-hidden w-[76px] border-[${lagItem?.borderColor}]`}
                    >
                      <Image
                        src={lagItem?.image}
                        className="w-full h-[50px] rounded-lg hover:scale-110 transition-all duration-500"
                        alt={`${lagItem.name}`}
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
