const fileWrapper = (id, input, output) => `id: ${id}\ninput: ${input}\noutput: ${output}`

export const createFile = (array, sqResult) => {
    const fs = require('fs');
    const id = Date.now();
    const fileResult = fileWrapper(id, array, sqResult);
    fs.writeFile(`../../results/result${id}.txt`, fileResult, (error, data) => {});
}