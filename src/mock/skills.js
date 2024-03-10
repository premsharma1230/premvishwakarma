import JSImage from "@/assets/img/Skills/js.png";
import TsImage from "@/assets/img/skills/ts.png";
import HTMLImage from "@/assets/img/skills/html.png";
import ReactJsImage from "@/assets/img/skills/reactjs.png";
import NextJsImage from "@/assets/img/skills/nextjs.png";
import ReduxImage from "@/assets/img/skills/redux.png";
import RemixImage from "@/assets/img/skills/remixjs.png";
import GraphQLImage from "@/assets/img/skills/GraphQL.png";
import JQueryImage from "@/assets/img/skills/jquery.png";
import CssImage from "@/assets/img/skills/css.png";
import SCssImage from "@/assets/img/skills/scss.png";
import LessImage from "@/assets/img/skills/less.png";
import AntdImage from "@/assets/img/skills/antd.png";
import BootstrapImage from "@/assets/img/skills/bootstrap.png";
import TailwindImage from "@/assets/img/skills/tailwind.png";
import MuiImage from "@/assets/img/skills/mui.png";
import FrameworksImage from "@/assets/img/skills/frameworks.png";
// version--controls
import GitImage from "@/assets/img/skills/git.png";
import BitBucketImage from "@/assets/img/skills/bitbucket.png";
import SourceTreeImage from "@/assets/img/skills/sourceTree.png";
import JenkinsImage from "@/assets/img/skills/Jenkins.png";
import GitLabImage from "@/assets/img/skills/gitLab.png";
// Agile
import Jiramage from "@/assets/img/skills/jira.png";
import Trelloamage from "@/assets/img/skills/trello.png";

export const SkillsList = [
    {
      title: "Languages",
      className: "lg:grid-cols-3  grid-cols-2 grid",
      languageList: [
        { name: "Javascript", image: JSImage,borderColor:"#FFF65C", },
        { name: "Typscript", image: TsImage ,borderColor:"#328FCC"},
        { name: "HTML", image: HTMLImage ,borderColor:"#EC713F" },
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
        { name: "GitLab", image: GitLabImage     },
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