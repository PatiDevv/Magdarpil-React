import React from "react";

interface IconBig {
  text: string;
  icon: React.ReactNode;
}

export default function IconBig({ icon, text }: IconBig) {
  return (
    <div className="ajra-description">
      {icon}
      {text}
    </div>
  );
}
