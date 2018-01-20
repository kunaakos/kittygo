import { ADD_CAT } from '../actions'
import { ADD_CATS } from '../actions'
import { canIHazCats } from '../data/animals';

const initialState = {
    cats: canIHazCats(100)
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_CAT:
            // assuming that payload is a valid cat
            return {
                ...state,
                cats: [action.payload, ...state.cats]
            }

        case ADD_CATS:
            // assuming that payload is a valid array of cats
            return {
                ...state,
                cats: [...action.payload, ...state.cats]
            }

        default:
            return state
    }

}

export default rootReducer