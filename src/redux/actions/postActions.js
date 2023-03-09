import { actionTypes } from "../constants/actionTypes";

export const setPosts = (posts) => {
    return {
        type : actionTypes.SET_POSTS,
        payload : posts
    }
} 
export const selectedPost = (post) => {
    return {
        type : actionTypes.SELECTED_POST,
        payload : post
    }
} 
export const removeSelectedPost = () => {
    return {
        type : actionTypes.REMOVE_SELECTED_POST,
    }
} 