import React from "react";

const About = () => {
  return (
    <>
      <header className="space-y-2 my-12 mt-32">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          About Me
        </h1>
        <p className="flex flex-col md:flex-row md:justify-between text-third">
          <span>Get to know me.</span>
          <span>Last updated: 19-08-24</span>
        </p>
      </header>
      <div className="text-second mb-40 space-y-8">
        <p>
          Hey, I'm Antonio, a full-stack web developer who loves building dynamic and responsive web apps. I'm all about finding simple, intuitive solutions to complex problems, whether that's on the front-end or back-end. I've got a solid handle on modern frameworks, databases, and design principles, and I really enjoy creating user-friendly experiences that look great and work even better. When I'm not deep in code, I'm usually checking out the latest tech trends or honing my skills to keep up with the fast pace of the industry.
        </p>
      </div>
    </>
  );
};

export default About;
