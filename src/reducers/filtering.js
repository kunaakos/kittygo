// @flow

import * as R from 'ramda'
import * as _ from 'lodash'
import type { FilterCollection, Filter, FilterOptionCollection, FilterOption, Predicate } from './filtering.types'

// return a collection of filter objects
export function createFilters(filterPropertyNames: string[], list: any[]): FilterCollection {
    return filterPropertyNames.reduce(createFilterReducerFor(list), {})
}

// return an array of predicate functions created from a set of filter objects
export function createPredicates(filters: FilterCollection): Predicate<any>[] {
    // $FlowFixMe
    return Object.values(filters).map(createPredicate)
}

// filter a list using an array of predicates, all of which need to be  for an element to pass
export function filterList(list: any, predicates: Predicate<any>[]) {
    return list.filter(R.allPass(predicates))
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
    let selectedFilterOptions = _.pickBy(filterOptions, isSelected)
    // $FlowFixMe    
    return Object.values(selectedFilterOptions).map((filterOption) => filterOption.value)
}

// true if an item's propertyName is one of the selectedValues
function hasSelectedValue(item: any, propertyName: string, selectedValues: string[]): boolean {
    return selectedValues.includes(item[propertyName])
}

// create a reducer function for a given list...
function createFilterReducerFor(list: any) {
    // ... which is used to reduce a list of filerPropertyNames to a set of filter objects
    return (filters: FilterCollection, filterPropertyName: string) => {
        let filterValues: string[] = getUniqueValuesOf(filterPropertyName, list)
        let filter: Filter = createFilter(filterPropertyName, filterValues)
        filters[filterPropertyName] = filter
        return filters
    }
}

// create a single filter option object
function createFilterOption(filterValue: string): FilterOption {
    return {
        name: filterValue,
        value: filterValue,
        selected: true
    }
}

// callback function used by createFilterOptions
function filterOptionsReduceCallback(filterOptions: FilterOptionCollection, filterValue: string): FilterOptionCollection {
    filterOptions[filterValue] = createFilterOption(filterValue)
    return filterOptions
}

// create a collection of filter options from a set of filter values
function createFilterOptions(filterValues: string[]): FilterOptionCollection { 
    return filterValues.reduce(filterOptionsReduceCallback, {})
}

// create filter object from filterPropertyName with the given values (set to true by default)
function createFilter(filterPropertyName: string, filterValues: string[]): Filter {
    return {
        name: filterPropertyName,
        propertyName: filterPropertyName,
        options: createFilterOptions(filterValues)
    }
}

// get unique values of filterProperty from list
function getUniqueValuesOf(filterProperty, list): string[] {
    return _.uniq(list.map(item => item[filterProperty]))
}
