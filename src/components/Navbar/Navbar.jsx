import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Logo = "/logo.svg";

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#top" onClick={scrollToTop}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </a>
      </div>
      <div
        className="scroll-progress"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </nav>
  );
};

export default Navbar;
