
import {setAuthUser} from "./authedUser";
import {hideLoading, showLoading} from "react-redux-loading";
import {_getQuestions, _getUsers} from "../utils/_DATA";
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";



export function handleQuestionsData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}