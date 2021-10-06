import {PURGE_AUTH_USER, SET_AUTH_USER} from "../actions/authedUser";

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.user;
        case PURGE_AUTH_USER:
            return {};
        default:
            return state;
    }
}