export const range = (start, end) => {
    if (start >= end) {
        return [];
    }
    return [...Array(end - start + 1).keys()].map((key) => key + start);
};
