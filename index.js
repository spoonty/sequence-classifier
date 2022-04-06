const fs = require('fs');
const sequenceClassifier = require('./script');

const fileWrapper = (id, input, output) => `id: ${id}\ninput: ${input}\noutput: ${output}`

const createFile = (array) => {
    const sqResult = sequenceClassifier(array);
    const id = Date.now();
    const fileResult = fileWrapper(id, array, sqResult);
    fs.writeFile(`./results/result${id}.txt`, fileResult, (error, data) => {});
}

createFile([4, 8, 15, 16, 23, 42]);
createFile([8, 8, 8, 8]);
