interface PuppyShowcaseProps {
  photo: string;
  deccriptionPicture: string;
}

export default function PuppyShowcase({ photo, deccriptionPicture }: PuppyShowcaseProps) {
  return (
    <li>
      <figure className="puppy-photo">
        <img src={photo} alt={deccriptionPicture} />
      </figure>
    </li>
  );
}
