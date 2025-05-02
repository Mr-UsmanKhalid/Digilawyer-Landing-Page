import React from "react";

const Features = () => {
  // Card data Details
  const Carddata = [
    {
      Title: "Statutes and Judgments Library",
      description:
        "Access a comprehensive library of statutes, regulations, and judicial decisions, all at your fingertips.",
    },
    {
      Title: "Document Management",
      description:
        "Streamline your document workflow with our intuitive document management system.",
    },
    {
      Title: "Research AI",
      description:
        "Leverage our powerful research AI to quickly find relevant information and insights from our extensive library.",
    },
    {
      Title: "Document Review and Analysis",
      description:
        "Automate your document review and analysis with our advanced AI capabilities.",
    },
    {
      Title: "Organization Accounts",
      description:
        "Manage your team's legal workflow with our organization-level accounts.",
    },
    {
      Title: "Secure and Compliant",
      description:
        "Leverage our powerful research AI to quickly find relevant information and insights from our extensive library.",
    },
  ];

  return (
    <div className=" flex w-full flex-col items-center" id="features">
      <div className="my-10 flex flex-col items-center justify-center space-y-4 text-center">
        <h4 className="inline-block rounded-lg bg-white/60 px-3 py-1 text-sm">
          Key Features
        </h4>
        <h2 className="font-bold text-xl text-white md:text-3xl">
          Your AI-Powered Legal Co-Pilot
        </h2>
        {/* Card */}
        <div className="flex justify-center  py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[90%] max-w-[1200px]">
            {Carddata.map((card, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] text-white text-center p-6 rounded-xl shadow-lg border border-[#2a2a2a] cursor-pointer"
              >
                <h2 className="text-xl font-semibold mb-3">{card.Title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
