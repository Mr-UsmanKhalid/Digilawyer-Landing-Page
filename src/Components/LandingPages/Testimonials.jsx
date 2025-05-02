import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black py-20 px-10  lg:px-50" id="testimonials">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-white text-4xl sm:text-5xl font-bold">
          Testimonials
        </h2>
        <p className="text-purple-800 text-sm md:text-lg">
          Reviews by industry experts
        </p>
        <ArrowDownwardIcon className="text-purple-800" sx={{ fontSize: 24 }} />
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 xl:flex-row-reverse lg:gap-16" >
        {/* Video Section */}
        <div className="group relative z-0 w-full max-w-lg sm:max-w-150  xl:max-w-[500px]  cursor-pointer">
          <img
            src="https://utfs.io/f/yDioHWOHBA8TmPdpaisJfSIs4CELQdmgbUAxZjrcVywzXM7D"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
            <PlayCircleIcon
              sx={{
                fontSize: 70,
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full flex flex-col justify-center text-center space-y-2 lg:text-left ">
          <p className="text-white font-semibold text-lg lg:text-2xl">
            Ahmer Bilal Soofi
          </p>
          <p className="text-white/60 text-lg md:text-[18px]">
            Founding Partner - ABS & Co
          </p>
          <p className="text-white/50 text-sm md:text-[18px]">
            Former Federal Minister of Law, Justice and Parliamentary Affairs
          </p>
          <p className="text-white italic font-medium text-balance lg:text-lg">
            "I believe this will be of great assistance to all the law firms
            that want to excel."
          </p>
        </div>

        
      </div>

      
      <div className="mt-10 flex flex-col-reverse items-center gap-4 xl:flex-row-reverse lg:gap-16">
          {/* Description Section */}
          <div className="w-full flex flex-col justify-center text-center space-y-2 lg:text-left ">
          <p className="text-white font-semibold text-lg lg:text-2xl">
            ABarrister Ahmad Pansota
          </p>
          <p className="text-white/60 text-lg md:text-[18px]">
            Founding Partner - ABS & Co
          </p>
          <p className="text-white/50 text-base md:text-[18px]">
          Senior Partner - Ahmed & Pansota (Advocates and Legal Consultants)
          </p>
          <p className="text-white italic font-medium text-balance lg:text-lg">
            “It's all in one, a parallel law firm that you can create while running the actual one.”
          </p>
        </div>

        {/* Video Section 2 */}
        <div className="group z-10 relative w-full max-w-lg sm:max-w-150 xl:max-w-[500px]  cursor-pointer ">
          <img
            src="https://utfs.io/f/yDioHWOHBA8T4ribIal8moY6gxIbjtLFDXZa1JO5H2fGVUd9"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
            <PlayCircleIcon
              sx={{
                fontSize: 70,
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                cursor: "pointer",
              }}
            />
          </div>
        </div>

      
        
      </div>

    </div>
  );
};

export default Testimonials;
