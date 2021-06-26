import React from "react";
import BlogHeroBg from "../images/blog-hero-bg-2.jpg";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${BlogHeroBg})` }}
    >
      <div className="flex justify-center flex-col items-center py-20">
        <h1 className="font-bold text-center text-blue-400 text-6xl">
          Naser Blogs
        </h1>
        <p className="text-center text-green-400 text-2xl">
          Awesome Blog contents related Web Development publish here.
        </p>
      </div>
    </div>
  );
}

export default Hero;
