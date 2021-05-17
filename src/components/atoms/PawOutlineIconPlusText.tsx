import { ReactNode } from "react";
import { PawOutline } from "react-ionicons";
import "./PawOutlineIconPlusText.css";

interface IconPlusTextProps {
  text: ReactNode;
}

export default function PawOutlineIconPlusText({ text }: IconPlusTextProps) {
  return (
    <div className="before-buy-paw">
      {<PawOutline height="25px" width="25px" color="rgba(100, 58, 124, 0.7)" />}
      {text}
    </div>
  );
}
