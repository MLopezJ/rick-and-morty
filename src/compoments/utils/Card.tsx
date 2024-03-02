import "./Card.scss";
import { Character } from "../../hooks/useCharacters";
import { useNavigate } from "react-router-dom";

const Card = ({ name, image, id }: Character) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/characters/${id}`)} className="character">
      <img src={image} alt="" className="character__thumbnail" />
      <div className="character__name">{name}</div>
    </div>
  );
};

export default Card;
