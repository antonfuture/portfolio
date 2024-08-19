import React, { memo } from "react";
import { TechCard } from "../card";
import GitHub from "../../assets/icons/github";

const Technologies = () => {
  const data = [
    {
      name: "Development",
      items: [
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Golang", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
        { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      ],
    },
    {
      name: "Apps",
      items: [
        { name: "Visual Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Putty", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" },
        { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Filezilla", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-original.svg" },
        { name: "IntelliJ", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Github", icon: <GitHub /> },
        { name: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
        { name: "Cloudflare", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
        { name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
        { name: "Webflow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" },
        { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Sentry", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" },
        { name: "Heroku", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
      ],
    },
    {
      name: "OS",
      items: [
        { name: "Windows", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
        { name: "Ubuntu", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" },
        { name: "Fedora", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fedora/fedora-original.svg" },
        { name: "Debian", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg" },
        { name: "CentOS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/centos/centos-original.svg" },
      ],
    },
  ];

  return (
    <section className="section">
      <div className="flex flex-col space-y-6">
        {data.map((item) => (
          <section key={item.name}>
            <h4 className="text-sm uppercase text-white/50 pb-2 mb-2">
              {item.name}
            </h4>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
              {item.items.map((i) => (
                <TechCard key={i.name} {...i} loading="lazy" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Technologies;