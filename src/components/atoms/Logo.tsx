import logo from "../../images/logo.png";
import "./Logo.css";

interface Props {
  size?: "medium" | "large"; /// znak zapytania pozwala nie podawac tego parametru poniewaz oznacza ze jest undefined
}

export default function Logo({ size = "medium" }: Props) {
  // tak jak w c# mozna przypisac parametr opcjonalny
  return <img src={logo} alt="Logo" className={size == "medium" ? "logoMedium" : "logoLarge"} />;
}
