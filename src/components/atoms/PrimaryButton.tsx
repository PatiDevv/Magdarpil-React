import "./PrimaryButton.css";

interface PrimaryButtonProps {
  href: string;
  text: string;
}

export default function PrimaryButton({ href, text }: PrimaryButtonProps) {
  return (
    <a className="btn btn-full" href={href}>
      {text}
    </a>
  );
}
