function increment(count) {
    return {
        type: "INCREMENT",
        data: count
    };
};

function decrement(count) {
    return {
        type: "DECREMENT",
        data: count
    };
};

export {
    increment,
    decrement
};