import {hideLoading, showLoading} from "react-redux-loading";
import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {saveUserAnswer} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion(authedUser, question) {
    return {
        type: SAVE_QUESTION,
        authedUser,
        question,
    }
}

export function answerQuestion(authedUser, id, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id,
        answer,
    }
}

//actions creator
export function handleQuestionsData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

export function handleCreateQuestion(authedUser,question) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(question).then((question) => {
            dispatch(saveQuestion(authedUser, question));
            dispatch(hideLoading());
        })
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestionAnswer({authedUser, qid, answer}).then((res) => {

            dispatch(answerQuestion(authedUser, qid, answer));
            dispatch(saveUserAnswer(authedUser, qid, answer));
            dispatch(hideLoading());
        })
    }
}