"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const slides = [
  {
    title: "Mercedes Benz",
    content:
      "Enhanced driver-car interaction through the detection of hand gestures, elevating the driving experience with the Mercedes Benz User Experience (MBUX) System.",
    image: "/our-work/mercedes.webp",
    url:"/portfolio/mbux"
  },
  {
    title: "Federated Learning on the Edge",
    content:
      "Revolutionizing privacy and efficiency in data processing with Federated Learning (FL) on edge devices, enabling real-time, secure analytics in several key sectors.",
    image: "/our-work/fl.webp",
    url : "/portfolio/federated-learning"
  },
  {
    title: "Bosch",
    content:
      "Precision detection with minimal footprint for vulnerable roadside users (VRUs) and road signs, as part of the Bosch-Daimler autonomous driving initiative.",
    image: "/our-work/bosch.webp",
    url:"/portfolio/bosch"
  },
  {
    title: "Fitness Pose Estimation",
    content:
      "Empowering exercise perfection with AI-driven real-time pose estimation, delivering interactive visual feedback to ensure correct posture and optimize exercise routines.",
    image: "/our-work/fitness.webp",
    url:"/portfolio/fitness-pose-estimation"
  },
  {
    title: "RAG based Personal Diary",
    content:
      "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
    image: "/our-work/rag_weave.webp",
    url:"/portfolio/rag"
  },
  {
    title: "Indian Fashion insight Framework ",
    content:
      "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights",
    image: "/our-work/fashion.webp",
    url:"/portfolio/fashion-framework"
  },

  {
    title: "AI Banking Insights & Monitoring",
    content:
      "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
    image: "/our-work/modefin_cover.webp",
    url:"/portfolio/banking-infra"
  },
  {
    title: "Data Query Assitant",
    content:
      "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction",
    image: "/our-work/sqlwizard-logo1.png",
    url:"/portfolio/sqlwizard"
  },
  {
    title: "Loneliness Assistant",
    content:
      "Personalised assistant designed to empathize with humans and serves as a close companion by engaging in emotionally profound interactions",
    image: "/our-work/lonely_llm.webp",
    url:"/portfolio/loneliness-assistant"
  },
  // Add more slides here as needed
];

const OurWork = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  console.log("currentSlide", currentSlide);

  return (
    <div className="w-full h-[120vh] md:h-[100vh] pl-[20px] md:pl-[80px] lg:pl-[160px] relative bg-[#00081F] flex flex-col justify-center">
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
      <div className="absolute top-[88px] right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      {/* Titile with buttons */}
      <div className="flex justify-between items-center pr-[10px] md:pr-[60px] lg:pr-[127px]">
        <h1 className="text-[8vw] md:text-[7vw]  lg:text-5xl text-white font-aeonik">
          Check Out Our Work
        </h1>
        {/* Buttons */}
        <div className="flex gap-[10px] md:gap-[15px]">
          {/* Left Button */}
          <div
            className="w-[8vw] h-[8vw] md:w-[49px] md:h-[49px] border border-white rounded-full flex justify-center items-center cursor-pointer duration-500 hover:border-[#ffffff92] hover:border"
            onClick={prevSlide}
          >
            <Image
              className="w-[20px] md:w-[30px] transform scale-x-[-1] "
              src="/arrowRight.svg"
              width="30"
              height="30"
              alt=""
            />
          </div>
          {/* Right Button */}
          <div
            className="w-[8vw] h-[8vw] md:w-[49px] md:h-[49px] border border-white rounded-full flex justify-center items-center cursor-pointer duration-500 hover:border-[#ffffff92] hover:border"
            onClick={nextSlide}
          >
            <Image
              src="/arrowRight.svg"
              className="w-[20px] md:w-[30px]"
              width="30"
              height="30"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Carousel  */}
      <div className="w-full relative z-[1] flex overflow-x-hidden mt-[67px]">
        <div className="flex relative gap-[10vw] lg:gap-[8vw] ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className=" h-auto lg:h-[444px] w-[90vw] lg:w-[77vw] relative rounded-[18px] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 py-[42px] px-[37px] flex flex-col-reverse lg:flex-row gap-[6vw] md:gap-[5vw] lg:gap-[0px] justify-between items-center transition-transform duration-500 ease-in-out"
              // style={{ transform: `translateX(-${currentSlide  * 100}%)` }}
              style={{
                transform: `translateX(-${
                  currentSlide * 5 + index * 5 + currentSlide * 100
                }%)`,
              }}
            >
              <div className="pl-0 lg:pl-[10px] w-[100%] lg:w-[50%]">
                <h3 className="text-[7.5vw] lg:text-[42px] tracking-normal text-white leading-[47px] font-aeonik">
                  {slide.title}
                </h3>
                <p className="text-[#9EB3CF] text-[19px] pt-[4vw] lg:pt-[22px] leading-[29px] font-bwmss01">
                  {slide.content}
                </p>
                <Link href={slide.url}>
                  <button className="rounded-[28px] mt-[6vw] lg:mt-[50px]  flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg font-bwmss01">
                    <div>Read More</div>
                  </button>
                </Link>
              </div>
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  className="w-[100%] h-[293px] rounded-[25px] object-cover"
                  src={slide.image}
                  width="368"
                  height="360"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
