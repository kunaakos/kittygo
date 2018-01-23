// @flow

import allPass from 'ramda/src/allPass'
import uniq from 'lodash/uniq'
import pickBy from 'lodash/pickBy'

import type { FilterCollection, Filter, FilterOptionCollection, FilterOption, Predicate } from './types'

import { sortOrderedCollection } from './collections';

// return a collection of filter objects
export function createFilters(filterPropertyNames: string[], list: any[]): FilterCollection {
    let filters = filterPropertyNames.reduce(createFilterReducerFor(list), {values:{}, keys: []})
    return filters
}

// return an array of predicate functions created from a set of filter objects
export function createPredicates(filters: FilterCollection): Predicate<any>[] {
    // $FlowFixMe
    return Object.values(filters.values).map(createPredicate)
}

// filter a list using an array of predicates, all of which need to be  for an element to pass
export function filterList(list: any, predicates: Predicate<any>[]) {
    return list.filter(allPass(predicates))
}

// return a predicate function that can be used for array.filter() created based on a filter object
function createPredicate(filter: Filter): Predicate<any> {
    let selectedValues = getSelectedFilterValues(filter.options)
    return (item: any) => hasSelectedValue(item, filter.propertyName, selectedValues)
}

// determines is a filter option is selected or not
function isSelected(filterOption: FilterOption): boolean {
    return filterOption.selected;
}

// get the values of the filter options that are selected (set to true)
function getSelectedFilterValues(filterOptions: FilterOptionCollection): string[] {
    let selectedFilterOptions = pickBy(filterOptions.values, isSelected)
    // $FlowFixMe    
    return Object.values(selectedFilterOptions).map((filterOption) => filterOption.propertyValue)
}

// true if an item's propertyName is one of the selectedValues
function hasSelectedValue(item: any, propertyName: string, selectedValues: string[]): boolean {
    return selectedValues.includes(item[propertyName])
}

// create a reducer function for a given list...
function createFilterReducerFor(list: any) {
    // ... which is used to reduce a list of filerPropertyNames to a set of filter objects
    return (filters: FilterCollection, filterPropertyName: string): FilterCollection => {
        let filterValues: string[] = getUniqueValuesOf(filterPropertyName, list)
        let filter: Filter = createFilter(filterPropertyName, filterValues)
        filters.values[filterPropertyName] = filter
        filters.keys.push(filter.ID)
        return filters
    }
}

// create a single filter option object
function createFilterOption(filterValue: string): FilterOption {
    return {
        ID: filterValue,
        name: filterValue,
        propertyValue: filterValue,
        selected: true
    }
}

// callback function used by createFilterOptions
function filterOptionsReduceCallback(filterOptions: FilterOptionCollection, filterValue: string): FilterOptionCollection {
    let filterOption = createFilterOption(filterValue)
    filterOptions.values[filterValue] = filterOption
    filterOptions.keys.push(filterOption.ID)
    return filterOptions
}

function filterOptionsCompareFn(a: FilterOption, b: FilterOption) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
}

// create a collection of filter options from a set of filter values
function createFilterOptions(filterValues: string[]): FilterOptionCollection { 
    let filterOptions = filterValues.reduce(filterOptionsReduceCallback, {values: {}, keys: []})
    filterOptions = sortOrderedCollection(filterOptions, filterOptionsCompareFn)
    return filterOptions
}

// create filter object from filterPropertyName with the given values (set to true by default)
function createFilter(filterPropertyName: string, filterValues: string[]): Filter {
    return {
        name: filterPropertyName,
        propertyName: filterPropertyName,
        ID: filterPropertyName,
        options: createFilterOptions(filterValues)
    }
}

// get unique values of filterProperty from list
function getUniqueValuesOf(filterProperty, list): string[] {
    return uniq(list.map(item => item[filterProperty]))
}
