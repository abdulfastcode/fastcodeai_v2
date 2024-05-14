import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[70vh] bg-blogHero bg-cover bg-no-repeat flex justify-center items-center relative "
    >
        
      <div className="flex flex-col gap-[40px] ">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Blogs
        </h1>
        <p className="text-lg text-[#9EB3CF] font-bwmss01 w-[60%]">
          Put artificial intelligence to work at scale in your enterprise with
          industry-leading AI expertise and a portfolio of solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
