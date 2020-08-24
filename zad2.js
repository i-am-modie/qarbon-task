const isObject = (obj) => obj === Object(obj);

function assignToObjectOnPath(object, path, value){
    const parsedKeys =  path.split("_");
    const keysMaxIndex = parsedKeys.length - 1;

    let currentContext = object; 

    parsedKeys.forEach((objectKeyInUpperCase, index) => {
        const objectKey = objectKeyInUpperCase.toLowerCase();

        if (index === keysMaxIndex) {
            currentContext[objectKey] = value;
            return;
        }

        if (!currentContext[objectKey]) {
            currentContext[objectKey] = {};
        }

        currentContext = currentContext[objectKey];
    });

}

function parseFlatObject(input) {
    if (!isObject(input)) {
        throw new Error("Input is not an object");
    }

    const keys = Object.keys(input);
    const result = {};

    if (!keys.length) {
        return {};
    }

    keys.forEach(key=>{
        assignToObjectOnPath(result,key,input[key])
    })

    return result;
}

const input = {
    TEST_INPUT: 1, 
    A_B_C: "OK", 
    A_B_D: "TEST", 
    MAX: "1",
};

console.log(parseFlatObject(input));


