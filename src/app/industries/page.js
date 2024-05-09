"use client"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import InnovativeProj from "./sections/InnovativeProj";
import SpecializeIndustries from "./sections/SpecializeIndustries";
import HowWeDo from "../component/sections/HowWeDo";
import WhyChooseUs from "../component/sections/WhyChooseUs";
import OurWork from "../component/sections/OurWork";
import Clients from "../component/sections/Clients";
import TestimonialsN from "../component/sections/TestimonialsN";
import Footer from "../component/sections/Footer";
import Cta from "./sections/Cta";


const Industries = () => {
    const { setIsActive } = useGlobalContext();


    useEffect(() => {
        setIsActive(false)
    }, [])
    return (
        <>
            <Hero />
            <InnovativeProj/>
            <SpecializeIndustries/>
            <HowWeDo/>
            <WhyChooseUs/>
            <OurWork/>
            <Clients/>
            <TestimonialsN/>
            <Cta/>
            <Footer/>
        </>
    )
}

export default Industries
