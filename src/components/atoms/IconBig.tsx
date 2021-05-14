import React from "react";

interface IconBigProps {
  text: string;
  icon: React.ReactNode;
}

export default function IconBig({ icon, text }: IconBigProps) {
  return (
    <div className="ajra-description">
      {icon}
      {text}
    </div>
  );
}
