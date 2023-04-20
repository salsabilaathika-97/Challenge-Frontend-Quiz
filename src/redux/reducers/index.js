import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers ({
    userData : authReducer,
    quizData : dataReducer,
})

export default rootReducer;