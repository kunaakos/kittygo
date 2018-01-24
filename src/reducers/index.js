// @flow

import cloneDeep from 'lodash/cloneDeep'

import type { FilterCollection, Predicate } from '../lib/types'

import { ADD_CATS, SET_CAT_FILTER } from '../actions'
import { canIHazCats } from '../data/pets';

import { createFilters, createPredicates, filterList } from '../lib/filtering';

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

const rootReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case ADD_CATS: {
            const cats: any[] = [...action.payload, ...state.cats]
            const catFilters: FilterCollection = createFilters(FILTER_PROPERTIES, cats)
            const catPredicates: Predicate<any>[] = createPredicates(catFilters)
            const displayedCats: any[] = filterList(cats, catPredicates).slice(0, 10)

            return {
                ...state,
                cats: cats,
                catFilters: catFilters,
                displayedCats: displayedCats
            }
        }

        case SET_CAT_FILTER: {
            const { filterName, filterValueName, filterValue }: {filterName: string, filterValueName: string, filterValue: boolean} = action.payload
            let catFilters: FilterCollection = cloneDeep(state.catFilters)
            catFilters.values[filterName].options.values[filterValueName].selected = filterValue
            const catPredicates: Predicate<any>[] = createPredicates(catFilters)
            const displayedCats: any[] = filterList(state.cats, catPredicates).slice(0, 10)

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