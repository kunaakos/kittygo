export const CAT_STRINGS = {
    coatColors: ["black", "chocolate", "lilac", "fawn", "white", "tabby", "spotted tabby"],
    eyeColors: ["brown", "hazel", "gold", "green", "blue"],
    personalities: ["quiet", "vocal", "active", "loving", "mean-spirited", "playful", "shifty"],
    names: ["Miffy", "Suzy", "Herbert", "Ashes", "Molly", "Charlie", "Tigger", "Poppy", "Oscar", "Chester", "Millie", "Daisy", "Max", "Jasper", "Trevor"]
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomString(strings) {
    return strings[randomInt(0, strings.length - 1)];
}

function* generateUid(string) {
    let index = 0;
    while (true) {
        yield `${string}${index.toString().padStart(6, "0")}`
        index++
    }
}

const generateCatId = generateUid("CT")

export function canIHazCat() {
    return {
        name: randomString(CAT_STRINGS.names),
        coatColor: randomString(CAT_STRINGS.coatColors),
        eyeColor: randomString(CAT_STRINGS.eyeColors),
        personality: randomString(CAT_STRINGS.personalities),
        age: randomInt(0, 17),
        weight: randomInt(20, 60) / 10,
        UID: generateCatId.next().value
    }
}

export function canIHazCats(thisMany) {
    return new Array(thisMany).fill(null).map(canIHazCat)
}
