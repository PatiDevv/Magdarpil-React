import "./LinkButton.css";

interface ButtonProps {
  name: string;
  href: string;
  variant: "header" | "footer";
}

export default function LinkButton({ name, href, variant }: ButtonProps) {
  return (
    <li className={variant}>
      <a href={href}>{name}</a>
    </li>
  );
}
