import {hideLoading, showLoading} from "react-redux-loading";
import {_getUsers} from "../utils/_DATA";
import {ANSWER_QUESTION} from "./questions";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleUsersData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers().then((users) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
}