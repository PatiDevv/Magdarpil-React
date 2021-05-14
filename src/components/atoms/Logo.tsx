import ImageAssets from "../../constants/ImageAssets";
import "./Logo.css";

interface LogoProps {
  size?: "medium" | "large"; /// znak zapytania pozwala nie podawac tego parametru poniewaz oznacza ze jest undefined
}

export default function Logo({ size = "medium" }: LogoProps) {
  // tak jak w c# mozna przypisac parametr opcjonalny
  return <img src={ImageAssets.logo} alt="Logo" className={size == "medium" ? "logoMedium" : "logoLarge"} />;
}
