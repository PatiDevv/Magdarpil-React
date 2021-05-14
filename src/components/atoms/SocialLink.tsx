import React from "react";
import "./SocialLink.css";

interface ButtonProps {
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, icon }: ButtonProps) {
  return (
    <li>
      <a href={href} target="_blank">
        {icon}
      </a>
    </li>
  );
}
