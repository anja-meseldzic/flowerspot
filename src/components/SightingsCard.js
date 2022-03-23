import "./SightingsCard.scss";
import ProfilePhoto from "../assets/card-user-holder.svg";
import LoactionIcon from "../assets/location.svg";
import HeartIcon from "../assets/heart.svg";
import CommentIcon from "../assets/comment-ellipsis-svgrepo-com.svg";

const SightingsCard = ({sighting}) => {
  return (
    <div className="card">
      <div className="card__img"
      style={{ backgroundImage: `url(${sighting.picture})` }}>
        <div className="card__location">
          <img src={LoactionIcon} alt="locationIcon" />
          <p>San Francisco, US</p>
        </div>
      </div>
      <div className="card__data">
        <div className="card__user">
          <div className="card__user--img">
            <img src={ProfilePhoto} alt="profilePhoto" />
          </div>
          <div className="user">
            <p className="user__flower">{sighting.flower.name}</p>
            <p className="user__username">by {sighting.user.full_name}</p>
          </div>
        </div>
        <div className="card__text">
          {sighting.description}
        </div>
        <div className="card__actions">
          <div className="card__actions--icon">
            <img src={CommentIcon} alt="commentIcon" />
          </div>
          <p>{sighting.comments_count} Comments</p>
          <div className="card__actions--icon">
            <img src={HeartIcon} alt="heartIcon" />
          </div>
          <p>{sighting.likes_count} Favourites</p>
        </div>
      </div>
    </div>
  );
};
export default SightingsCard;
