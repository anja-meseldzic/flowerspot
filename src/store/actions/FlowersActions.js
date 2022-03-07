import axios from 'axios';

export const setFlowers = (payload) => ({
    type: 'SET_FLOWERS',
    payload
});

export const getFlowers = () => {
    return (dispatch) => {
        axios
            .get(`https://flowrspot-api.herokuapp.com/api/v1/flowers`)
            .then((res) => {
                dispatch(setFlowers(res.data.flowers));
            })
    }
}

