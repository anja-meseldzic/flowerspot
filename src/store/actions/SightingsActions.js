import SightingsService from "../../api/SightingsService"

export const setAllSightings = (payload) =>({
    type: "SET_SIGHTINGS",
    payload
});

export const addSighting = (payload) =>({
    type: "ADD_SIGHTING",
    payload
});

export const getSightings = () => {
    return (dispatch) => {
        SightingsService.getAllSightings().then((res) =>{
            dispatch(setAllSightings(res.data.sightings));
        }).catch((err) => {console.log(err)})
    }
}

export const createSighting = (payload) => {
    return (dispatch) => {
        SightingsService.createSighting(payload).then((res) =>{
            dispatch(addSighting(res.data.sighting));
        }).catch((err) => {console.log(err)})
    }
}