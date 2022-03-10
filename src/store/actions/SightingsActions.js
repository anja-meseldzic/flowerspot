import SightingsService from "../../api/SightingsService"

export const setAllSightings = (payload) =>{
    type: "SET_SIGHTINGS",
    payload
}

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
            //dispatch(setAllSightings(res.data.sightings));
        }).catch((err) => {console.log(err)})
    }
}