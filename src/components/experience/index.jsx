import React, { Fragment } from "react";
import Card from "../card";

const Experience = () => {
  const ex = [
    {
      title: "Website Developer",
      company: "Noxlyn LLC",
      date: "Feb, 2024 - Present",
    },
    {
      title: "Full Stack Engineer",
      company: "Freelance",
      date: "Jul, 2023 - Present",
    },
  ];
  const ed = [
    {
        school: "University of Ss. Cyril and Methodius",
        course: "Computer Science",
        date: "2020-2024"
    }
  ];
  return (
    <section className="section grid gap-x-8 gap-y-24 md:grid-cols-2">
      <div>
        <h3 className="text-sm font-medium uppercase text-white/50">
          Experience
        </h3>
        <div className="mt-4 grid gap-2">
          {ex.map((e, index) => (
            <Fragment key={index}>
              <Card
                title={e.company}
                tagline={e.title}
                date={e.date}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium uppercase text-white/50">Education</h3>
        <div className="mt-4 grid gap-2">
          {ed.map((e, index) => (
            <Fragment key={index}>
              <Card
                title={e.school}
                tagline={e.course}
                date={e.date}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
