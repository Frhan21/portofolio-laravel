import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Project from "../Components/Project";
import Footer from "../Components/Footer";


export default function Index({ projects }) {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Project projects={projects}/>
            <Footer/>
        </div>
    );
}
