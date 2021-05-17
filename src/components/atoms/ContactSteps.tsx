interface Props {
  icon: React.ReactNode;
  text: string;
  href?: string;
  phone?: string;
  hrefIcon?: string;
}

export default function ContactSteps({ icon, text, href, phone, hrefIcon }: Props) {
  return (
    <div className="contact-steps">
      <div className="icon">
        <a href={hrefIcon} target="_blank">
          <div>{icon}</div>
        </a>
      </div>

      <p>
        {text}
        <a className="link" href={href} target="_blank">
          <strong>{phone}</strong>
        </a>
      </p>
    </div>
  );
}
