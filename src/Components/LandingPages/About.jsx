import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-4 px-16 py-28 md:px-24" id="about">
      <div className="container flex w-full flex-col justify-center lg:flex-row">
        <div className="w-full self-center text-white">
          <h2 className="mb-4 text-white text-4xl md:mb-8 md:text-5xl">
            AI-Powered Legal Services for Effortless Legal Work
          </h2>
          <ul className="mb-10 max-w-[22rem] md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <CheckCircleOutlineIcon
                  className="text-purple-800"
                  sx={{ fontSize: "2rem" }}
                />
                <h6 className="ml-5">Comprehensive Legal Research</h6>
              </div>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <CheckCircleOutlineIcon
                  className="text-purple-800"
                  sx={{ fontSize: "2rem" }}
                />
                <h6 className="ml-5">Comprehensive legal Archive</h6>
              </div>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <CheckCircleOutlineIcon
                  className="text-purple-800"
                  sx={{ fontSize: "2rem" }}
                />
                <h6 className="ml-5">Efficient Document Drafting</h6>
              </div>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <CheckCircleOutlineIcon
                  className="text-purple-800"
                  sx={{ fontSize: "2rem" }}
                />
                <h6 className="ml-5">Fast Document Search</h6>
              </div>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <CheckCircleOutlineIcon
                  className="text-purple-800"
                  sx={{ fontSize: "2rem" }}
                />
                <h6 className="ml-5">Advanced AI Integration</h6>
              </div>
            </li>
          </ul>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "black",
              borderRadius: "8px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Try it now
          </Button>
        </div>

        <div className="mt-4 flex h-full w-full flex-col justify-center">
          <p className="mt-10 text-foreground-400 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem] text-white/50">
            "DigiLawyer leverages AI and a rich data ecosystem to streamline legal workflows, making it the ultimate tool for legal professionals."
          </p>
        </div>

        

      </div>
    </div>
  );
};

export default About;
