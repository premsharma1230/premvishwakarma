"use client"
import React, { useContext } from "react";
import { themeContext } from "@/utils/Context";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
// import Services from "../components/Services/Services";
// import Experience from "../components/Experience/Experience";
// import Works from "../components/Works/Works";
// import Portfolio from "../components/Portfolio/Portfolio";
// import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/skills/skills";

export default function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills/>
      <Projects />
     
      {/* <Services />
      <Experience />
      <Works />
      <Portfolio /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
