import "./Card.scss";
import { Character } from "../../hooks/useCharacters";

const Card = ({ name, image }: Character) => {
  return (
    <div
      //onClick={() => }
      className="character"
    >
      <img src={image} alt="" className="character__thumbnail" />
      <div className="character__name">{name}</div>
    </div>
  );
};

export default Card;
