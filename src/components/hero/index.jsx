import React from "react";
import { Pill } from "../card";
import GitHub from "../../assets/icons/github";

const Hero = () => {
    const pills = [
        {
            name: "Github",
            icon: <GitHub />,
            link: "https://github.com/flickydev"
        },
    ];

    const skills = ["JavaScript", "Python", "Node.js", "PHP", "Tailwind CSS"];

    return (
        <>
            <header className="flex flex-col my-16 py-10 md:flex-row md:justify-between items-center mt-32">
                <div className="md:w-7/12 space-y-6 text-center md:text-left">
                    <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
                        Full-stack web developer
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        I build scalable, responsive web applications with a passion for creating dynamic user experiences.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap">
                        {pills.map((item) => (
                            <Pill key={item.name} {...item} />
                        ))}
                    </div>
                </div>
                
                <div className="md:w-4/12 space-y-6 mt-8 md:mt-0 text-center md:text-left">
                    <h2 className="text-text font-semibold text-2xl md:text-3xl">Core Skills</h2>
                    <ul className="space-y-2">
                        {skills.map((skill) => (
                            <li key={skill} className="text-lg md:text-xl text-gray-600">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Hero;
