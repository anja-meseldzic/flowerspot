import "./FlowerDetails.scss";
import StarIcon from "../assets/star.svg";
import SightingsCard from "../components/SightingsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFlowerDetails,
  getFlowerSightings,
} from "../store/actions/FlowersActions";
import { useParams } from "react-router-dom";

const FlowerDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFlowerDetails(id));
    dispatch(getFlowerSightings(id));
  }, [id]);

  const flower = useSelector((state) => state.flowers.flowerDetails);
  const sightings = useSelector((state) => state.flowers.sightings);


  return (
    <div>
      <section className="details">
        <div className="details__img">
          <img src={flower?.profile_picture} alt="slika" />
        </div>
        <div className="details__content">
          <div className="details__content-text">
            <div className="favourites">
              <div
                className="favourites__div"
                style={ flower?.favorite ? { backgroundColor :`#FF7676`} : { backgroundColor :`white`} }
              >
                <img src={StarIcon} alt="starIcon"></img>
              </div>
              <div className="favourites__sightings">
                {flower?.sightings} Sightings
              </div>
            </div>
            <div className="name">{flower?.name}</div>
            <div className="latin-name">{flower?.latin_name}</div>
          </div>
          <div className="details__content-button">
            <button className="btn">+ Add New Sighting</button>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description__main">
          <p>Kingdom: Plantae</p>
          <p>Order: Asterales</p>
          <p>Family: Campanulaceae</p>
          <p>Species: P. grandiflorus</p>
        </div>
        <div className="description__side">
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
          </p>
          <p>
            Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an
            herbaceous perennial with dark green leaves and blue flowers in late
            summer. A notable feature of the plant is the flower bud which
            swells like a balloon before fully opening.[4] The five petals are
            fused together into a bell shape at the base, like its relatives,
            the campanulas. There are varieties with white, pink and purple
            blooms in cultivation.[5] In Korea, white flowers are more common.
            This plant[6] together with its cultivars 'Apoyama group'[7] and
            'Mariesii'[8] have gained the Royal Horticultural Society's Award of
            Garden Merit.
          </p>
        </div>
      </section>
      <section className="sightings">
        {sightings.map((sighting) => (
          <SightingsCard sighting={sighting} key={sighting.id}></SightingsCard>
        ))}
      </section>
    </div>
  );
};

export default FlowerDetails;
