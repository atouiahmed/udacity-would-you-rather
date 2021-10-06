export const SET_AUTH_USER = 'SET_AUTH_USER';
export const PURGE_AUTH_USER = 'PURGE_AUTH_USER';

export function setAuthUser(user) {
    return {
        type: SET_AUTH_USER,
        user
    }
}
export function purgeAuthUser() {
    return {
        type: PURGE_AUTH_USER
    }
}