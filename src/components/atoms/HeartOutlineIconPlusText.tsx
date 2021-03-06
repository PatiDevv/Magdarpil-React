import { ReactNode } from "react";
import { HeartOutline } from "react-ionicons";
import "./HeartOutlineIconPlusText.css";

interface IconPlusTextProps {
  text: ReactNode;
}

export default function HeartOutlineIconPlusText({ text }: IconPlusTextProps) {
  return (
    <div className="before-buy-heart">
      {<HeartOutline height="25px" width="25px" color="rgba(100, 58, 124, 0.7)" />}
      <div>{text}</div>
    </div>
  );
}
