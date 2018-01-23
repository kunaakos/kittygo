import * as R from 'ramda'
// import * as _ from 'lodash'

// @flow
import type { FilterCollection, Filter, FilterOptionCollection, FilterOption, Predicate } from './filtering.types'

import { ADD_CATS, SET_CAT_FILTER } from '../actions'
import { canIHazCats } from '../data/animals';

import { createFilters, createPredicates, filterList } from './filtering';

const FILTER_PROPERTIES = ['coatColor', 'eyeColor', 'personality']

const initialCats = canIHazCats(10000)
const initialCatFilters = createFilters(FILTER_PROPERTIES, initialCats)
const initialCatPredicates = createPredicates(initialCatFilters)
const initialDisplayedCats = filterList(initialCats, initialCatPredicates).slice(0, 10)

const initialState = {
    cats: initialCats,
    catFilters: initialCatFilters,
    displayedCats: initialDisplayedCats
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_CATS: {
            const cats = [...action.payload, ...state.cats]
            const catFilters: FilterCollection = createFilters(FILTER_PROPERTIES, cats)
            const catPredicates: Predicate[] = createPredicates(catFilters)
            const displayedCats = filterList(cats, catPredicates).slice(0, 10)

            return {
                ...state,
                cats: cats,
                catFilters: catFilters,
                displayedCats: displayedCats
            }
        }

        case SET_CAT_FILTER: {
            const { filterName, filterValueName, filterValue } = action.payload
            let catFilters = {...state.catFilters}
            catFilters[filterName].options[filterValueName].selected = filterValue
            const cats = state.cats
            const catPredicates = createPredicates(catFilters)
            const displayedCats = filterList(cats, catPredicates).slice(0, 10)

            return {
                ...state,
                catFilters: catFilters,
                displayedCats: displayedCats
            }
        }

        default:
            return state
    }

}

export default rootReducer