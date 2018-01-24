export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomString(strings) {
    return strings[randomInt(0, strings.length - 1)];
}

export function* generateUid(string) {
    let index = 0;
    while (true) {
        yield `${string}${index.toString().padStart(6, "0")}`
        index++
    }
}
