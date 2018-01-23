import { OrderedCollection, CompareFn } from "./types";

export function sortOrderedCollection({values, keys}: OrderedCollection<any>, compareFn: CompareFn<any>) {
    let sortedKeys = keys.slice().sort((a, b) => {
        return compareFn(values[a], values[b])
    })
    return {
        values: {...values},
        keys: sortedKeys
    }
}