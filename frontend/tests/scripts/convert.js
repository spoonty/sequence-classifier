const convert = (array) => {
    return array.join().replace(/,/g, ' ');
}

module.exports = convert;