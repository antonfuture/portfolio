import React from "react";

const Card = ({ title, tagline, date }) => {
  return (
    <div className="card-base">
      {date ? (
        <div className="flex space-x-2 items-center justify-between">
          <h1 className="text-text">{title || "Project"}</h1>
          <span className="text-sm text-white/30">{date}</span>
        </div>
      ) : (
        <h1 className="text-text">{title || "Project"}</h1>
      )}
      <p className="text-primary text-sm">
        {tagline ||
          "My projects and contributions to the open-source community."}
      </p>
    </div>
  );
};

export default Card;

export const TechCard = ({ name, src, icon }) => {
  return (
    <div className="p-4 border border-accent rounded-md flex gap-2 justify-center bg-secondary space-x-4
                    transition-colors duration-300 ease-in-out
                    hover:border-third">
      <div className="rounded-lg flex">
        {src ? (
          <img
            src={src}
            alt={name}
            className="flex-shrink-0 h-5 w-5"
          />
        ) : (
          icon
        )}
      </div>
      <span className="flex-1 truncate text-sm text-text">{name}</span>
    </div>
  );
};

export const Pill = ({ name, src, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="cursor-pointer flex items-center justify-center px-5 py-2 rounded-lg border border-accent border-opacity-40 space-x-2 w-max bg-secondary 
                  transition-shadow duration-300 ease-in-out
                  hover:shadow-ds"
      title={name}
    >
      <span>
        {src ? (
          <img
            src={src}
            alt={name}
            className="flex-shrink-0 h-5 w-5"
          />
        ) : (
          icon
        )}
      </span>
    </a>
  );
};

export const ContactCard = ({ name, tagline, link, icon }) => {
  return (
    <a
      href={link}
      className="cursor-pointer flex items-center justify-between p-4 rounded-lg border border-accent border-opacity-40 space-x-2 bg-secondary
                  transition-shadow duration-300 ease-in-out
                  hover:shadow-ds"
      target="_blank"
      rel="noreferrer noopener"
      title={name}
    >
      <div className="overflow-x-hidden leading-relaxed space-y-2">
        <h2 className="font-medium text-text truncate">{name}</h2>
        <p className="text-primary text-sm line-clamp-2">{tagline}</p>
      </div>
      <div className="flex-shrink-0">{icon}</div>
    </a>
  );
};