import { ReactNode } from "react";
import { PawOutline } from "react-ionicons";

interface IconPlusTextProps {
  text: ReactNode;
}

export default function PawIconPlusText({ text }: IconPlusTextProps) {
  return (
    <div className="zanim-kupisz">
      {<PawOutline height="25px" width="25px" color="rgba(100, 58, 124, 0.7)" />}
      {text}
    </div>
  );
}
