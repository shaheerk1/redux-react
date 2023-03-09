import { actionTypes } from "../constants/actionTypes";

const initialState = {
    posts : []
}

export const postReducer = ( state = initialState , {type, payload }) => {
    switch (type) {
        case actionTypes.SET_POSTS:
            return {...state, posts: payload};
        default:
            return state;
    }
}
export const selectedPostReducer = ( state = initialState , {type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_POST:
            return {...state, ...payload};
        case actionTypes.REMOVE_SELECTED_POST:
            return {};
        default:
            return state;
    }
}