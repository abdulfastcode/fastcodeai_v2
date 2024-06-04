"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";

const ArjunAndTeam = () => {
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    // Simulate fetching image data
    const fetchedImages = [
      "/team/Arjun_Jain.webp",
      "/team/abdul.png",
      "/team/darshan.webp",
      "/team/Dhaval.webp",
      "/team/eshwar.webp",
      "/team/gautam.webp",
      "/team/Jadhav.webp",
      "/team/Nanda.webp",
      "/team/parth-bw.webp",
      "/team/Prabal.webp",
      "/team/Sanjay.webp",
      // '/team/Shreyas.webp',
      // '/team/Sughosh.webp',
      // '/team/Tirth.webp'
    ].map((src) => ({ src, visible: Math.random() < 0.5 })); // Randomly set some images as visible
    setImageInfo(fetchedImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageInfo((currentImageInfo) => {
        const newImageInfo = [...currentImageInfo];
        const visibleImages = newImageInfo.filter((info) => info.visible);
        const hiddenImages = newImageInfo.filter((info) => !info.visible);

        if (hiddenImages.length > 0 && visibleImages.length > 0) {
          const randomVisibleIndex = Math.floor(
            Math.random() * visibleImages.length
          );
          // console.log("randomVisibleIndex",randomVisibleIndex)
          const randomHiddenIndex = Math.floor(
            Math.random() * hiddenImages.length
          );
          // console.log("randomHiddenIndex",randomHiddenIndex)

          // Swap visibility
          visibleImages[randomVisibleIndex].visible = false;
          hiddenImages[randomHiddenIndex].visible = true;
        }

        return newImageInfo;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full lg:h-[190vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 px-[20px] md:px-[50px] lg:pr-[127px] lg:pl-[100px] relative z-[5]">
      <div className="w-full h-auto lg:h-[80vh] pb-[57px] lg:pb-0  border-b border-[#FFFFFF] relative flex items-center gap-0 lg:gap-[10%] flex-col-reverse lg:flex-row justify-center">
        <div className=" h-full w-full lg:w-[70%] flex flex-col justify-start lg:justify-center gap-[20px] lg:gap-[26px]">
          <h1 className="font-aeonik text-[8vw] md:text-[7vw] lg:text-[5.5vw] text-white leading-[8.5vw] md:leading-[7.5vw] lg:leading-[6.5vw] tracking-normal font-light">
            Guiding Excellence Through Leadership
          </h1>
          <p className="text-lg lg:text-[1.5vw] lg:leading-[2vw] font-bwmss01 text-[#9EB3CF]">
            <b className="font-bold">Dr. Arjun Jain</b> is a recognized leader in machine learning. With a
            focused commitment to enhancing AI utility across multiple
            industries, he spearheads initiatives that leverage AI to solve
            real-world problems. Under his leadership, Fast Code AI has emerged
            as a hub of innovation.
          </p>
          <div className="flex flex-wrap w-full items-center gap-[40px] mt-[30px]">
            <div className="flex gap-[13px] md:w-[40%]  items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src="/about/about_arjun/icon1.svg"
                  width="30"
                  height="46"
                  alt=""
                />
              </div>
              <p className="text-lg  lg:text-[1.5vw] lg:leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                5 Patents
              </p>
            </div>
            <div className="flex gap-[13px] md:w-[40%] items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  className="pt-[8px]"
                  src="/about/about_arjun/scholar.png"
                  width="60"
                  height="60"
                  alt=""
                />
              </div>
              <p className="text-lg  lg:text-[1.5vw] lg:leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                7000+ Citations
              </p>
            </div>

            <div className="flex gap-[13px] md:w-[40%] items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src="/about/about_arjun/IISC.png"
                  width="45"
                  height="45"
                  alt=""
                />
              </div>
              <p className="text-lg  lg:text-[1.5vw] lg:leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                Adjunct Faculty,
                <br /> IISC Bangalore
              </p>
            </div>
            <div className="flex gap-[13px] md:w-[40%] items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src="/about/about_arjun/IITB.png"
                  width="45"
                  height="45"
                  alt=""
                />
              </div>
              <p className="text-lg  lg:text-[1.5vw] lg:leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                Former Adjunct <br /> Professor, IIT Bombay
              </p>
            </div>
          </div>
        </div>
        <div className=" h-full w-[100%] lg:w-[24%] relative">
          <div className="relative w-full h-[60%] top-[-70px] lg:top-[-40px] ">
            <div className="flex justify-normal lg:block">
              <Image
                className="w-[45vw] md:w-[30vw] lg:w-[291px]"
                src="/about/about_arjun/Arjun2.png"
                width="291"
                height="301"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-[9vw] md:text-[6.7vw] lg:text-[1.6vw] lg:text-center mt-[60px] font-light leading-[10vw] md:leading-[8vw] lg:leading-[2vw] font-aeonik text-[#ffffff]">
                Dr. Arjun Jain <br /> Founder and Chief Scientist
              </p>
              <div className="lg:hidden w-[220px] md:w-[25vw] mt-[20px]">
                <Link
                  href="https://arjunjain.co.in/"
                  target="_blank"
                  className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg "
                >
                  <div>Personal Website</div>
                  <div>
                    <Image
                      className="inline "
                      src="/arrowRight.svg"
                      alt="arrow"
                      width="16"
                      height="13"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-[58px] hidden lg:flex justify-center ">
            <Link
              href="https://arjunjain.co.in/"
              target="_blank"
              className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg "
            >
              <div>Personal Website</div>
              <div>
                <Image
                  className="inline "
                  src="/arrowRight.svg"
                  alt="arrow"
                  width="16"
                  height="13"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* team */}
      <div className="w-full h-auto py-[40px] lg:py-0 lg:h-[100vh] relative flex flex-col items-center justify-center z-[4]">
        <div className="flex flex-col md:flex-row gap-[10vw] md:gap-[0px] w-full items-center z-[3]">
          <div className=" w-[100%] md:w-[45%]">
            <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] tracking-normal text-white font-aeonik">
              Our Team
            </h1>
            <p className="text-[#9EB3CF] w-[80%] text-lg font-bwmss01 font-light mt-[15px] md:mt-[30px]">
            Our team is composed of seasoned professionals, each with extensive research backgrounds. 
We are proud authors of influential papers and active contributors to open-source initiatives. 
Each member has been carefully selected from top universities, emphasizing our commitment
to innovative problem solvers who excel in their fields.
            </p>
            {/* <Link href="/team" className="rounded-[28px] mt-[50px] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg">
              Get Started
              <Image
                className="inline"
                src="/arrowRight.svg"
                alt="arrow"
                width="16"
                height="13"
              />
            </Link> */}
            <div className="max-w-[185px] mt-[30px] md:mt-[35px] lg:mt-[50px]">
            <Button to="/team" name="More About Us"/>
            </div>
          </div>
          <div className="columns__col mod--team is-2 w-[100%] md:w-[55%] h-full  ">
            <div className="team_grid flex flex-wrap justify-center md:justify-end">
              {imageInfo.map((info, index) => (
                <div
                  key={info.src}
                  className={`team__grid-block p-4 ${
                    index > 7 ? "hidden lg:block" : "block"
                  }`}
                >
                  <div
                    className={`team_circle rounded-full w-[5rem] h-[5rem] md:w-[7.5rem] md:h-[7.5rem] transition-all duration-300 relative overflow-hidden ease-cubic-bezier ${
                      info.visible ? "border-0" : "border border-[#ffffffcc]"
                    }`}
                  >
                    <Image
                      className={`transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier ${
                        info.visible ? "" : "opacity-0"
                      }`}
                      src={info.src}
                      width="120"
                      height="120"
                      alt="team"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArjunAndTeam;
