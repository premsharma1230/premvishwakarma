'use client';
import React, { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Link from "next/link";
// import { Link } from "react-scroll";
const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Link href="/">
          <div className="n-name">Prem</div>
        </Link>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="#active" href="/" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1CTq_4IgNYyyT8GtqyqDcwcvafwAz1yoX/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
        {!isMobile ? (
          <Link href="tel:9625001862" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        ) : (
          <Link href="https://drive.google.com/file/d/1CTq_4IgNYyyT8GtqyqDcwcvafwAz1yoX/view?usp=sharing" target="_blank" >
            <button className="button n-button">Resume</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default navbar;
