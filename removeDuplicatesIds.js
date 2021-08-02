const removeDuplicateIds = (obj) => {
    return Object.values(obj).filter((values) => console.log(new Set(values)))
}

const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
    "3": ["A", "B", "D", "A", "L"],
};
removeDuplicateIds(obj)