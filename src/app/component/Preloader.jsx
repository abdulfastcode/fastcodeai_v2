"use client";

import { useEffect } from 'react';
import Lottie from "lottie-react";
import preloader1 from "../../../public/animations/preloader/Logo_6.json";
import preloader2 from "../../../public/animations/preloader/Logo_8.json";

const Preloader = () => {
      
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00081F] text-white z-50 transition-opacity duration-1000">
      {/* <h1 className="text-4xl font-bold animate-pulse">Welcome to My Website</h1> */}
      <div className="w-[80%] animate-pulse">
          <Lottie animationData={preloader1} loop={false} />
        </div>
    </div>
  );
};

export default Preloader;
