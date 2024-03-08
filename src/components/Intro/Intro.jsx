'use client'
import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "@/assets/img/Vector1.png";
import Vector2 from "@/assets/img/Vector2.png"; 
import glassesimoji from "@/assets/img/glassesimoji.png";
import thumbup from "@/assets/img/thumbup.png";
import crown from "@/assets/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "@/assets/img/github.png";
import LinkedIn from "@/assets/img/linkedin.png";
import Instagram from "@/assets/img/instagram.png"; 
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AvatarProfile from "@/assets/img/avatar/avatarHD1.png"
import { themeContext } from "@/utils/Context";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Prem Vishwakarma</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button  w-[max!important]">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
         <a href="https://github.com/premsharma1230"  target="_blank"> <img src={Github  .src} alt="git" title="prem git" /></a>
         <a href="https://www.linkedin.com/in/prem-vishwakarma-483135169/" target="_blank"><img src={LinkedIn  .src} alt="linkedIn" title="linkedIn" /></a> 
         <a href="https://www.instagram.com/iam_prem_sharma/" target="_blank"> <img src={Instagram  .src} alt="Intagram" title="Intagram"/></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right"> 
        <img src={Vector1  .src} alt="vector" />
        <img src={Vector2  .src} alt="vector" />
        {/* <figure className="figure-image"> */}
        <motion.img
         className="figure-image"
          initial={{ right: "2" }}
          whileInView={{ left: "24%" }}
          transition={transition}
          src={AvatarProfile .src}
          alt=""
        /> 
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji .src}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
