import { ReactNode } from "react";
import { TimeOutline } from "react-ionicons";

interface IconPlusTextProps {
  text: ReactNode;
}

export default function TimeOutlineIconPlusText({ text }: IconPlusTextProps) {
  return (
    <div className="zanim-kupisz">
      {<TimeOutline height="25px" width="25px" color="rgba(100, 58, 124, 0.7)" />}
      <div>{text}</div>
    </div>
  );
}
