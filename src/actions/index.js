export const ADD_CATS = "ADD_CATS"
export const addCats = cats => ({ type: ADD_CATS, payload: cats });

export const SET_CAT_FILTER = "TOGGLE_CAT_FILTER"
export const setCatFilter = changedFilter => ({ type: SET_CAT_FILTER, payload: changedFilter })