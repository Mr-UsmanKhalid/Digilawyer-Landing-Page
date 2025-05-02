import React from "react";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import { motion } from "motion/react";
import a from "../../assets/animation/1.png";
import b from "../../assets/animation/2.png";
import c from "../../assets/animation/3.png";
import d from "../../assets/animation/4.png";
import e from "../../assets/animation/5.png";

const Topsection = () => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden min-h-screen "  id="home"> 
      <div className="flex flex-col items-center justify-center gap-3 md:mt-20  h-full">
        <h1
          className="font-extrabold text-6xl cursor-pointer sm:text-7xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text leading-[1.1] text-center "
          style={{
            backgroundImage: "linear-gradient(to bottom, #ffffff, #222222)",
          }}
        >
          DigiLawyer
        </h1>
        <p className="text-center text-white text-xs sm:text-sm md:text-lg mb-4">
          Empower your organization with cutting-edge AI.
          <br className="" />
          Discover the future of legal practice
        </p>

        
        {/* Search Bar */}
        <div className="flex justify-center items-center w-full mt-0">
          <div className="flex flex-row items-center gap-2 border-2 p-2 rounded-full bg-gray-800 min-w-[360px] sm:min-w-[400px]  md:min-w-[600px] lg:min-w-[700px]">
            <AttachFileRoundedIcon
              sx={{
                color: "grey",
                fontSize: { xs: 20, sm: 18, md: 20, lg: 24 },
              }}
              className="ml-1 rotate-45"
            />
            <input
              className="flex-1 bg-transparent outline-none text-gray-200 text-sm sm:text-base"
              type="text"
              placeholder="Search"
            />
            <NorthRoundedIcon
              sx={{
                fontSize: { xs: 12, sm: 18, md: 20, lg: 24 },
                color: "white",
                backgroundColor: "#4B5563",
                borderRadius: "50%",
                width: { xs: 26, sm: 30, md: 32, lg: 36 },
                height: { xs: 26, sm: 30, md: 32, lg: 36 },
                padding: { xs: "4px", sm: "6px", md: "6px", lg: "8px" },
                cursor: "pointer",
                position: "relative",
                right: 3,
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 m relative bottom-0 mt-25 sm:mt-0">
          {/* Tag */}
          <div className="flex justify-center items-center text-white border-0 rounded-2xl bg-white/10 px-3 py-1 mt-8">
            <p>We work with the best</p>
          </div>
          {/* Animation */}
          <div className="w-full max-w-[700px] overflow-hidden mt-2">
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20.5353125,
                delay: 0,
                ease: "linear",
              }}
              style={{
                animationPlayState: "running",
                minWidth: "auto", 
                userSelect: "none",
              }}
            >
              <div className="flex flex-row h-14 gap-18">
                <img src={a} alt="" />
                <img src={b} alt="" />
                <img src={c} alt="" />
                <img src={d} alt="" />
                <img src={e} alt="" />
              </div>
              <div className="flex flex-row h-14 gap-18">
                <img src={a} alt="" />
                <img src={b} alt="" />
                <img src={c} alt="" />
                <img src={d} alt="" />
                <img src={e} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
