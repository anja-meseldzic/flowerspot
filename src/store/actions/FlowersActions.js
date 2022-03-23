import FlowerService from "../../api/FlowerService";

export const setFlowers = (payload) => ({
  type: "SET_FLOWERS",
  payload,
});

export const setFlowerDetails = (payload) => ({
  type: "SET_DETAILS",
  payload,
});

export const setFlowerSightings = (payload) => ({
  type: "SET_SIGHTINGS",
  payload,
});

export const getFlowers = () => {
  return (dispatch) => {
    FlowerService.getAllFlowers().then((res) => {
      dispatch(setFlowers(res.data.flowers));
    });
  };
};

export const getFlowerDetails = (payload) => {
  return (dispatch) => {
    FlowerService.getFlowerDetails(payload).then((res) => {
      dispatch(setFlowerDetails(res.data.flower));
    });
  };
};


export const getFlowerSightings = (payload) => {
  return (dispatch) => {
    FlowerService.getSightingsForFlower(payload).then((res) => {
      dispatch(setFlowerSightings(res.data.sightings));
    });
  };
};