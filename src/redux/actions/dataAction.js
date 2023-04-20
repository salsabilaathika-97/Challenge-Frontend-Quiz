import axios from "axios";
import TYPES from "../types";

export const getData = () => (dispatch) => {
    axios
    .get(`https://opentdb.com/api.php?amount=10`)
    .then((res) => {
        console.log(res.data);
        dispatch({
            type: TYPES.GET_DATA,
            payload: res.data,
        })
    })
    .catch((err) => console.log(err))
}