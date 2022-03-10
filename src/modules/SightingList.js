import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSightings } from "../store/actions/SightingsActions";
import "./SightingList.scss";

const SightingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSightings());
  }, []);

  const sightings = useSelector((state) => state.sightings.allSightings);

  return (
    <Fragment>
      <header className="header">
        <div className="header__content">
          <p className="header__main">Sighting List</p>
          <p className="header__sub">
            Explore between more than 8,427 sightings
          </p>
        </div>
        <button className="addSightingBtn">+ Add New Sighting</button>
      </header>
      <main className="sightings">
        {sightings.map((sighting) => {
          console.log(sighting);
        })}
      </main>
      <footer className="footer">
        <button className="addSightingBtn">+ Add New Sighting</button>
      </footer>
    </Fragment>
  );
};

export default SightingList;
