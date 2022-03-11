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
      <section className="header1">
        <div className="header1__content">
          <p className="header1__main">Sighting List</p>
          <p className="header1__sub">
            Explore between more than 8,427 sightings
          </p>
        </div>
          <button className="addSightingBtn">+ Add New Sighting</button>
      </section>
      <section className="sightings">
        {sightings.map((sighting) => 
          <div className="kartica"></div>
        )}
      </section>
      <section className="footer">
        <button className="addSightingBtn">+ Add New Sighting</button>
      </section>
    </Fragment>
  );
};

export default SightingList;
