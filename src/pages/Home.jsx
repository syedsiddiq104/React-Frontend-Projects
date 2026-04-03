import React from "react";
import { useNavigate } from "react-router-dom";
import TextPressure from "../components/TextPressure";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ccd7e2] text-[#1F2937] text-center px-6">

      

      <h1 className="text-6xl font-extrabold mb-6">Welcome to My Projects</h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        This space is a collection of my small web experiments and learning
        projects built with React, Tailwind, and JavaScript. Explore different
        apps and see how each project works.
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/otpvalidation")}
          className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition shadow-md"
        >
          Explore Projects
        </button>
      </div>

      <TextPressure
        text="Made With  ❤️  By syedsiddiq"
        flex
        alpha={false}
        stroke={false}
        width
        height
        weight
        italic
        textColor="#fffff"
        strokeColor="#5227FF"
        minFontSize={36}
      />
    </div>
  );
};

export default Home;
