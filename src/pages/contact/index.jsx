import React from "react";
import { ContactCard } from "../../components/card";
import GitHub from "../../assets/icons/github";
import Instagram from "../../assets/icons/instagram";
import Email from "../../assets/icons/email";
import Discord from "../../assets/icons/discord";

const Contact = () => {
  const items = [
    {
      name: "GitHub",
      tagline: "Follow me on GitHub!",
      link: "https://github.com/flickydev",
      icon: <GitHub c="h-8 w-8"/>
    },
    {
      name: "Instagram",
      tagline: "Follow me on Instagram!",
      link: "https://www.instagram.com/lpetrovski_",
      icon: <Instagram/>
    },
    {
      name: "Discord",
      tagline: "Write me a message on discord!",
      link: "https://discord.com/users/1141422910821646337",
      icon: <Discord/>
    },
    {
      name: "Email",
      tagline: "Send me an email!",
      link: "mailto:hello@flicky.dev",
      icon: <Email/>
    },
  ]
  return (
    <>
      <header className="space-y-2 my-12 mt-32">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          Contact
        </h1>
        <p className="text-third">Reach out to me.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 md:mb-[122px]">
        {items.map((item) => (
          <ContactCard key={item.name} {...item}/>
        ))}
      </div>
    </>
  );
};

export default Contact;
