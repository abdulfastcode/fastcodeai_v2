"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Experties = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    "Artificial Intelligence": useRef(null),
    "Computer Vision": useRef(null),
    "Machine Learning": useRef(null),
    "Data Science": useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMain(entry.target.dataset.main);
        }
      });
    }, observerOptions);

    Object.values(mainRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSetActiveMain = (main) => {
    setActiveMain(main);
    mainRefs[main].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#00081F] w-full h-[100%]  relative pb-[30px] lg:pb-[250px]">
      <div className="grid grid-cols-12 gap-[0px] gap-y-[10vw] pl-[20px] mg:pl-[50px] lg:pl-[170px] pr-[20px] md:pr-[50px] lg:pr-[127px] w-full h-[100%]  justify-center pt-[100px] lg:pt-[250px]">
        {/* NAV */}

        <div
          className="bg-[#00081f] col-span-12 lg:col-span-3 flex flex-row lg:flex-col justify-center lg:justify-start md:gap-[25px] gap-[15px] sticky z-[3] py-[10vw] md:py-[5vw] lg:py-0 top-[16vw] md:top-[10vw] lg:top-[10vw] h-fit"
          ref={navRef}
        >
          {/* Artificial Intelligence */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={` w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Artificial Intelligence"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Artificial Intelligence")}
          >
            <span className="block relative z-10">
              <Image
                src="/experties/icon1.svg"
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Artificial Intelligence" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          {/* Computer Vision */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Computer Vision"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Computer Vision")}
          >
            <span className="block relative z-10">
              <Image
                src="/experties/icon2.svg"
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Computer Vision" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          {/* Machine Learning */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Machine Learning"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Machine Learning")}
          >
            <span className="block relative z-10">
              <Image
                src="/experties/icon3.svg"
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Machine Learning" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          {/* Data Science */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Data Science"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Data Science")}
          >
            <span className="block relative z-10">
              <Image
                src="/experties/icon4.svg"
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Data Science" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Main */}
        <div className="col-span-12 lg:col-span-9 w-full flex flex-col gap-[10vw] relative  h-[100%]">
          {/* Artificial Intelligence */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Artificial Intelligence"]}
            data-main="Artificial Intelligence"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] md:gap-[50px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left ">
                <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                  Artificial Intelligence
                </h1>
                <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01 ">
                  Develop and implement bespoke AI solutions to rapidly advance
                  your organizational goals. We collaborate with you to identify
                  the optimal artificial intelligence strategies, tools and
                  technologies.
                </p>
              </div>
              <div>
                <Image
                className="rounded-[18px]"
                  src="/experties/ai.png"
                  width="470"
                  height="244"
                  alt="consultation" 
                />
              </div>
            </div>
          </div>
          {/* Computer Vision */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Computer Vision"]}
            data-main="Computer Vision"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik ">
                  Computer Vision
                </h1>
                <p className="text-[#9EB3CF] text-base md:text-lg  font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                  We develop custom software solutions using computer vision and
                  deep learning to analyze images, videos, LiDAR, and live
                  streams, helping businesses identify and track objects for
                  enhanced decision-making.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/computer_vesion.png"
                  width="470"
                  height="244"
                  alt="consultation" className="rounded-[18px]"
                />
              </div>
            </div>
          </div>
          {/* Machine Learning */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Machine Learning"]}
            data-main="Machine Learning"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                  Machine Learning
                </h1>
                <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                  Design and implement innovative ML solutions rapidly — from
                  foundational infrastructure to customer products. Our expert
                  engineers will partner with you to advance innovation
                  effectively within your company.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation2.png"
                  width="470"
                  height="244"
                  alt="consultation" className="rounded-[18px]"
                />
              </div>
            </div>
          </div>
          {/* Data Science */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Data Science"]}
            data-main="Data Science"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                  Data Science
                </h1>
                <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                  Our full-stack data scientists excel in solving intricate data
                  challenges, regardless of data volume or structure, enabling
                  your business to significantly improve efficiency and increase
                  profitability rapidly.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/ds.png"
                  width="470"
                  height="244"
                  alt="consultation" className="rounded-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
