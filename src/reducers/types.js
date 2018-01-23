// @flow

export type OrderedCollection<T> = {
    values: {
        [ID: string]: T
    },
    keys: string[]
}

export type FilterOption = {
    ID: string,
    name: string,
    propertyValue: string,
    selected: boolean
}

export type FilterOptionCollection = OrderedCollection<FilterOption>

export type Filter = {
    ID: string,
    name: string,
    propertyName: string,
    options: FilterOptionCollection
}

export type FilterCollection = OrderedCollection<Filter>


export type Predicate<T> = (input: T) => boolean

export type CompareFn<T> = (a: T, b: T) => -1 | 0 | 1