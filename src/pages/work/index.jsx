import React from "react";
import Link from "../../assets/icons/link";
import GitHub from "../../assets/icons/github";
import RainbowMetals from "../../assets/images/rainbowmetals.png";
import Tooledpro from "../../assets/images/tooledpro.png";
import Musicbot from "../../assets/images/musicbot.png";
import Discordinfo from "../../assets/images/discordinfo.png";
import Lookupname from "../../assets/images/lookupname.png";
import Comingsoon from "../../assets/images/comingsoon.png";

const Work = () => {
  const items = [
    {
      name: "Rainbow Metals",
      tagline: "A buckles and plaques shopping website and designer.",
      img: RainbowMetals,
      link: "https://rainbowmetals.com/",
    },
    {
      name: "Tooled.pro",
      tagline: "A website for all your tooling needs and more.",
      img: Tooledpro,
      link: "https://tooled.pro/",
    },
    {
      name: "Lookup.name",
      tagline: "Find detailed information with lookup.name for all of your various needs.",
      img: Lookupname,
      link: "https://lookup.name",
    },
    {
      name: "TetherVPN",
      tagline: "A fast and secure vpn with no logs and no tracking.",
      img: Comingsoon,
      link: "https://tethervpn.com/",
    },
    {
      name: "Music Bot",
      tagline: "A simple and modern music bot for discord with synced lyrics.",
      img: Musicbot,
    },
    {
      name: "Discord Info API",
      tagline: "A user info api that gets information about the user from discord.",
      img: Discordinfo,
    },
  ];

  return (
    <>
      <header className="space-y-2 my-12 mt-32">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          My Projects
        </h1>
        <p className="text-third">Examples of my work.</p>
      </header>
      {items.map((item, index) => (
        <section
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            index === 0 ? "mt-24 mb-42" : "my-42"
          }`}
          key={index}
        >
          <div className="space-y-4 text-third">
            {item.tag && (
              <span className="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5">
                {item.tag}
              </span>
            )}
            <h2 className="text-4xl text-text font-bold">{item.name}</h2>
            <p>{item.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer justify-center px-5 py-2 rounded-lg flex items-center space-x-2 w-max border border-accent bg-secondary text-second transition-shadow duration-300 ease-in-out hover:shadow-ds"
                >
                  <Link />
                  <span>Visit</span>
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer justify-center px-5 py-2 rounded-lg flex items-center space-x-2 w-max border border-accent bg-secondary text-second transition-shadow duration-300 ease-in-out hover:shadow-ds"
                >
                  <GitHub />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <figure
            className={`w-full h-full overflow-hidden ${
              index % 2 === 1 ? "md:order-first" : ""
            }`}
          >
            <img
              src={item.img}
              alt={`${item.name} screenshot`}
              loading="lazy"
              draggable="false"
              className="object-cover w-full rounded-md border border-white/10"
            />
          </figure>
        </section>
      ))}
    </>
  );
};

export default React.memo(Work);
