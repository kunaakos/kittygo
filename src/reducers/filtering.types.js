// @flow

export type FilterOption = {
    ID: string,
    name: string,
    propertyValue: string,
    selected: boolean
}

export type Filter = {
    ID: string,
    name: string,
    propertyName: string,
    options: FilterOptionCollection
}

export type FilterOptionCollection = OrderedCollection<FilterOption>

export type FilterCollection = OrderedCollection<Filter>

export type OrderedCollection<T> = {
    values: {
        [ID: string]: T
    },
    keys: string[]
}

export type Predicate<T> = (input: T) => boolean