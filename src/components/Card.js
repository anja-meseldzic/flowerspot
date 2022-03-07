import StarIcon from "../assets/star.svg";
import "./Card.scss";

function Card({flower}) {
  return (
    <div className="flower__card" style={{backgroundImage: `url(${flower.profile_picture})`}}>
      <h2 className="flower__name">{flower.name}</h2>
      <p className="flower__description">{flower.latin_name}</p>
      <button className="flower__btn">{flower.sightings} sightings</button>

      <div className="flower__favourite">
        <img src={StarIcon}></img>
      </div>
    </div>
  );
}

export default Card;
