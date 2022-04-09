const classifyByNumber = (result) => {
    switch (result) {
        case 0:
            return 'UNORDERED';
            break;
        case 1:
            return 'STRICTLY INCREASING';
            break;
        case 2:
            return 'NOT DECREASING';
            break;
        case 3:
            return 'STRICTLY DECREASING';
            break;
        case 4:
            return 'NOT INCREASING';
            break;
        case 5:
            return 'CONSTANT';
            break;
    }
}

module.exports = classifyByNumber;