// @flow

export type FilterOption = {
    name: string,
    value: string,
    selected: boolean
}

export type Filter = {
    name: string,
    propertyName: string,
    options: FilterOptionCollection
}

export type FilterOptionCollection = {
    [ID: string]: FilterOption
}

export type FilterCollection = {
    [ID: string]: Filter
}

export type Predicate<T> = (input: T) => boolean