import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Packages, allFeatures } from "../../Components/PackagesData/Packages";




const Pricing = () => {
  const [selected, setSelected] = useState("Monthly");// Default selected Monthly' plan

  const plans = ["Monthly", "Quartely", "BiAnnual", "Yearly"];



  // Get selected plan data from Packages array
  const selectedPlans = Packages.find((p) => p[selected])?.[selected] || [];

  return (
    <div className="w-full flex flex-col items-center bg-black py-20 px-6 lg:px-24" id="pricing">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-white text-4xl sm:text-5xl font-bold">
          Discover the Future of Legal AI Technology
        </h2>
        <Button
          variant="text"
          sx={{
            color: "#6a1b9a",
            borderRadius: "4px",
            fontSize: "16px",
            gap: 1,
            textTransform: "capitalize",
            fontWeight: "bold",
            transition: "1.5s ease-in-out",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Try it free for 48 hours{" "}
          <ArrowForwardIcon className="text-purple-800" sx={{ fontSize: 20 }} />
        </Button>
      </div>

      {/* Plan Switcher */}
      <div className="flex flex-row items-center mt-10">
        <motion.ul
          className="flex gap-2 items-center border rounded-2xl border-gray-500 px-3 py-2"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {plans.map((plan) => (
            <li
              key={plan}
              className={`text-sm font-semibold px-3 py-1 rounded-lg cursor-pointer transition-all duration-700 ease-in-out sm:text-lg ${
                selected === plan
                  ? "bg-purple-500 text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setSelected(plan)}
            >
              {plan}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-5xl mt-8">
        {selectedPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#23024b] to-[#0e0a1f] rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl text-white font-bold mb-2">{plan.Title}</h2>
            <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
            <div className="text-3xl text-white font-extrabold mb-1">PKR {plan.Price}</div>
            <div className="text-sm text-gray-400 mb-4">Per Month</div>

            <button className="bg-purple-600 font-semibold  text-white w-full py-2 rounded-lg mb-4">
              Contact Us
            </button>

            <ul className="space-y-2">
              {allFeatures.map((feature, i) => (

                // Check feature is included in plan
                <li key={i} className="flex items-center">
                  {plan.Features.includes(feature) ? (
                    <span className="mr-2"><DoneIcon sx={{
                      color: "#5c1fa7",
                      fontSize: 20,
                    }} /></span>
                  ) : (
                    <span className=" mr-2"><ClearIcon sx={{
                      color: "gray",
                      fontSize: 20,
                    }}
                     /></span>
                  )}
                  <span
                    className={
                      plan.Features.includes(feature)
                        ? "text-white"
                        : "text-gray-500 line-through"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {plan.Title === "Team" && (
              <div className="mt-4 text-sm  bg-white/60 text-purple-800 px-3 py-1 rounded-lg w-max">
                For 3 Users
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
