function getItemsMaxNumber(items) {
    const regexToGetNumber = /\d+/;

    if (!items || !Array.isArray(items) || !items.length) {
        return 0;
    }

    return items.reduce((maxNumber, item) => {
        const currentNumberString = item?.name?.match(regexToGetNumber)?.[0];
        const currentNumber = Number(currentNumberString);

        if (!isNaN(currentNumber) && currentNumber > maxNumber) {
            return currentNumber;
        }

        return maxNumber;
    }, 0);
}

const items = [
    { test: "test" },
    { name: "test 12 test" },
    { name: "item X" },
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 11" },
    { name: "item 3" },
    { name: "item 10" },
];

console.log(getItemsMaxNumber(items));


