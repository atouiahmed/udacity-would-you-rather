import {hideLoading, showLoading} from "react-redux-loading";
import {_getQuestions} from "../utils/_DATA";
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