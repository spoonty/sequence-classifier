const sequenceClassifier = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(val => !Number.isInteger(val))) {
        throw new Error('Incorrect input');
    }

    let len = arr.length - 1;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < len; i++) {
        const dif = arr[i] - arr[i + 1];
        if (dif > 0) positive++;
        else if (dif < 0) negative++;
        else zero++;
    }

    if (negative === len && len) return 1
    else if (!positive && negative && zero) return 2
    else if (positive === len && len) return 3
    else if (!negative && zero && positive) return 4
    else if (zero === len) return 5
    return 0;
}

module.exports = sequenceClassifier;