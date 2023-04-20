import axios from "axios";
import TYPES from "../types";

export const getData = () => (dispatch) => {
    axios
    .get(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`)
    .then((res) => {
        console.log(res.data.results);
        dispatch({
            type: TYPES.GET_DATA,
            payload: res.data.results,
        })
    })
    .catch((err) => console.log(err))
}