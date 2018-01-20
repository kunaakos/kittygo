import { ADD_CAT } from '../actions'
import { ADD_CATS } from '../actions'
import { canIHazCats } from '../data/animals';

const initialCats = canIHazCats(100)
const initialState = {
    cats: initialCats,
    displayedCats: initialCats.slice(0,10)
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_CAT: {
            // assuming that payload is a valid cat
            let cats = [action.payload, ...state.cats]
            return {
                ...state,
                cats: cats,
                displayedCats: cats.slice(0,10)
            }
        }
    
        case ADD_CATS: {
            // assuming that payload is a valid array of cats
            let cats = [...action.payload, ...state.cats]
            return {
                ...state,
                cats: cats,
                displayedCats: cats.slice(0,10)
            }
        }

        default:
            return state
    }

}

export default rootReducer