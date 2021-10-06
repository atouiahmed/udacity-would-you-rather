
import {setAuthUser} from "./authedUser";
import {hideLoading, showLoading} from "react-redux-loading";
import {_getQuestions, _getUsers} from "../utils/_DATA";
import {receiveUsers} from "./users";


export function handleUsersData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers().then((users) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
}
export function handleQuestionsData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions().then(({users, tweets}) => {
            dispatch(hideLoading());
        })
    }
}