import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Home.scss";
import Logo from "../assets/search-svgrepo-com.svg";
import Header from "../components/Header";
import Card from "../components/Card";
import { getFlowers } from "../store/actions/FlowersActions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlowers());
  }, []);

  const flowers = useSelector((state) => state.flowers.flowers);
  const isLoggedIn = useSelector((state) => state.auth.token);

  return (
    <Fragment>
      <Header></Header>
      {!isLoggedIn && (
        <section className="about">
          <div>
            <h1 className="heading-1">Discover flowers around you</h1>
            <p className="about__text">
              Explore between more than 8.427 sightings
            </p>
            <div className="about__search">
              <input
                type="text"
                className="about__search-input"
                placeholder="Looking for something specific?"
              />
              <img src={Logo} alt="logo"></img>
            </div>
          </div>
        </section>
      )}
      <section className="flowers">
        {flowers.map((flower) => (
          <Card flower={flower} key={flower.id}></Card>
        ))}
      </section>
    </Fragment>
  );
}
export default Home;
