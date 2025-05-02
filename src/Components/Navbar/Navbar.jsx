import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
// dropdown css
import "../../Components/Navbar/dropdown.css";

const Navbar = () => {
  // Sidebar
  const [SideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    // When ReClcik the button the boolean type convert to false again
    setSideBarOpen((prev) => !prev);
  };

  // Handle Sidebar when max-width resize at  767px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && IsOpen) {
        SetIsOpen(false);
      }

      if (window.innerWidth > 767 && SideBarOpen) {
        setSideBarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [SideBarOpen]);

  // Handle Body Overflow
  // When the sidebar is open, prevent scrolling on the body
  useEffect(() => {
    if (SideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [SideBarOpen]);

  // Scroll Features
  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);
  

    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
       });
    }
  };

  return (
    <nav
      className="fixed z-50 w-full flex justify-between bg-black/80 text-white p-5 md:justify-around items-center"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-1.5 home" onClick={() => scrollToSection("home")} >
        <img src={logo} alt="Logo" className="w-8 h-8 lg:w-12 lg:h-12" />
        <h1 className="font-bold text-3xl">DigiLawyer</h1>
      </div>

      {/* Desktop Navigation */}
      <ul
        className="space-x-6 items-center hidden md:flex"
        style={{ fontWeight: "700" }}
      >
        <li>
          <a
            href="#testimonials"
            onClick={() => scrollToSection("testimonals")}
          >
            TESTIMONIALS
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={() => scrollToSection("princing")}>
            PRICING
          </a>
        </li>
        <li className="nav-dropdown">
          <a href="#" className="nav-link">
            ABOUT <KeyboardArrowDownOutlinedIcon className="ml-1 pb-0.5" />
          </a>

          <ul className="dropdown-menu">
            <li>
              <a href="#features" onClick={() => scrollToSection("features")}>
                FEATURES
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                DIGILAWYER
              </a>
            </li>
            <li>
              <a href="#news">NEWS</a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-2">
        <Button
          variant="outlined"
          sx={{
            color: "gray",
            borderColor: "gray",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
            },
          }}
        >
          sign up
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "black",
            borderColor: "gray",
            borderRadius: "8px",
            textTransform: "capitalize",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          sign in
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden">
        {SideBarOpen ? (
          <CloseIcon
            onClick={() => toggleSidebar(false)}
            className="cursor-pointer transition-transform duration-300 transform rotate-90"
          />
        ) : (
          <DragHandleIcon
            onClick={() => toggleSidebar(true)}
            className="cursor-pointer transition-transform duration-300"
          />
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {SideBarOpen && (
        <div className="fixed inset-0 bg-black text-white p-8 z-50 mt-20">
          <ul className="space-y-8 text-3xl">
            <li>
              <a
                href="#testimonials"
                onClick={() => {
                  scrollToSection("testimonals");
                  toggleSidebar(false);
                }}
              >
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={() => {
                  scrollToSection("pricing");
                  toggleSidebar(false);
                }}
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => {
                  scrollToSection("features");
                  toggleSidebar(false);
                }}
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  scrollToSection("about");
                  toggleSidebar(false);
                }}
              >
                ABOUT DIGILAWYER
              </a>
            </li>
            <li>
              <a href="#news" onClick={() => toggleSidebar(false)}>
                NEWS
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="text-violet-500"
                onClick={() => toggleSidebar(false)}
              >
                SIGN UP
              </a>
            </li>
            <li>
              <a
                href="#signin"
                className="text-violet-500"
                onClick={() => toggleSidebar(false)}
              >
                SIGN IN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
