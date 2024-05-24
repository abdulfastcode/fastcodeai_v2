"use client";
import Image from "next/image";
import React, { useState } from "react";

const HowWeDo = ({ pb }) => {
  const [showAccordion, setShowAccordion] = useState(0);
  const handleAccordion = (accordionNumber) => {
    setShowAccordion(accordionNumber);
  };
  return (
    <div
      className={`w-full ${pb} h-auto lg:h-[auto]  pl-[20px] md:pl-[50px]  xl:pl-[100px] pr-[20px] md:pr-[50px]  relative bg-[#00081F] flex flex-col justify-center mt-[100px] overflow-hidden`}
    >
      <div>
        <h1 className="text-5xl text-white font-aeonik tracking-normal">
          How We Do It
        </h1>
      </div>
      <div className="max-w-[100%] flex-col lg:flex-row sm:mt-[55px] flex">
        {/* Accordion 1 */}
        <div
          onClick={() => handleAccordion(0)}
          className={`group ${
            showAccordion === 0
              ? "h-[400px] sm:h-[520px] lg:h-[519px] "
              : "h-[200px] lg:h-[519px]"
          } lg:border-r-2 border-[#AFC0FF]  w-[100%] lg:w-[579px] flex cursor-pointer `}
        >
          {showAccordion === 0 && (
            <div className={`w-[177px] h-[519px] hidden sm:block`}>
              <Image
                className="w-full h-full"
                src="/accordion/accb-1.png"
                height="519"
                width="177"
                alt=""
              />
            </div>
          )}
          <div className=" flex flex-col mt-[60px] px-[32px] ">
            <h1
              className={`text-7xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                showAccordion !== 0 ? "group-hover:scale-[1.1]" : ""
              }`}
            >
              01
            </h1>
            {showAccordion === 0 && (
              <div className="flex flex-col w-full sm:w-[333px]  ">
                <h3 className="text-4xl w-full text-white font-aeonik pt-[20px]">
                  Connect With Us
                </h3>
                <p className="text-[#9EB3CF] font-bwmss01  text-[19px] leading-7 pt-[23px]">
                  Fill out our NDA-protected contact form, book a time on our
                  calendar, and arrange an e-meeting with our expert team.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Accordion 2 */}
        <div
          onClick={() => handleAccordion(1)}
          className={`group ${
            showAccordion === 1
              ? "h-[400px] sm:h-[520px] lg:h-[519px] "
              : "h-[200px] lg:h-[519px]"
          } lg:border-r-2 border-[#AFC0FF]  w-[100%] lg:w-[579px] flex cursor-pointer `}
        >
          {showAccordion === 1 && (
            <div className="w-[177px] h-[519px] hidden sm:block">
              <Image
                className="w-full h-full"
                src="/accordion/accb-1.png"
                height="519"
                width="177"
                alt=""
              />
            </div>
          )}
          <div className=" flex flex-col mt-[60px]  px-[32px]">
            <h1
              className={`text-7xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                showAccordion !== 1 ? "group-hover:scale-[1.1]" : ""
              }`}
            >
              02
            </h1>
            {showAccordion === 1 && (
              <div className="flex flex-col w-full sm:w-[333px]  ">
                <h3 className="text-4xl w-full text-white font-aeonik pt-[20px]">
                  Project Feasibility Consultation
                </h3>
                <p className="text-[#9EB3CF] font-bwmss01 text-[19px] leading-7 pt-[23px]">
                  Discuss your project ideas in a consultation call with our
                  team, to assess their feasibility and potential impact.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Accordion 3 */}
        <div
          onClick={() => handleAccordion(2)}
          className={`group ${
            showAccordion === 2
              ? "h-[400px] sm:h-[520px] lg:h-[519px] "
              : "h-[200px] lg:h-[519px]"
          } lg:border-r-2 border-[#AFC0FF]  w-[100%] lg:w-[579px] flex cursor-pointer `}
        >
          {showAccordion === 2 && (
            <div className="w-[177px] h-[519px] hidden sm:block">
              <Image
                className="w-full h-full"
                src="/accordion/accb-1.png"
                height="519"
                width="177"
                alt=""
              />
            </div>
          )}
          <div className=" flex flex-col mt-[60px] px-[32px] ">
            <h1
              className={`text-7xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                showAccordion !== 2 ? "group-hover:scale-[1.1]" : ""
              }`}
            >
              03
            </h1>
            {showAccordion === 2 && (
              <div className="flex flex-col w-full sm:w-[333px]  ">
                <h3 className="text-4xl w-full text-white font-aeonik pt-[20px]">
                  Get a Detailed Cost Estimate
                </h3>
                <p className="text-[#9EB3CF] font-bwmss01 text-[19px] leading-7 pt-[23px]">
                  {"We'll"} provide a comprehensive project proposal, including
                  budget and timeline estimates, tailored to your specific
                  requirements.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Accordion 4 */}
        <div
          onClick={() => handleAccordion(3)}
          className={`group ${
            showAccordion === 3
              ? "h-[400px] sm:h-[520px] lg:h-[519px] "
              : "h-[200px] lg:h-[519px]"
          } lg:border-r-2 border-[#AFC0FF]  w-[100%] lg:w-[579px] flex cursor-pointer `}
        >
          {showAccordion === 3 && (
            <div className="w-[177px] h-[519px]   hidden sm:block">
              <Image
                className="w-full h-full"
                src="/accordion/accb-1.png"
                height="519"
                width="177"
                alt=""
              />
            </div>
          )}
          <div className=" flex flex-col mt-[60px] px-[32px] ">
            <h1
              className={`text-7xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                showAccordion !== 3 ? "group-hover:scale-[1.1]" : ""
              }`}
            >
              04
            </h1>
            {showAccordion === 3 && (
              <div className="flex flex-col w-full sm:w-[333px]  ">
                <h3 className="text-4xl w-full text-white font-aeonik pt-[20px]">
                  Project Kickoff
                </h3>
                <p className="text-[#9EB3CF] font-bwmss01 text-[19px] leading-7 pt-[23px]">
                  After finalizing the agreement, we initiate your project,
                  committed to delivering excellence.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
