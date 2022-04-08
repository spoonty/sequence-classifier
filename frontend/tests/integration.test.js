import {sequenceClassifier} from "../src/Scripts/script";
import {getLastResult, addResult} from "./api";
import {convert} from "../src/Scripts/convert";
import {classifyByNumber} from "../src/Scripts/classifyByNumber";

describe("Sequence classifier API", () => {
    jest.setTimeout(30000);

    const array = [4, 8, 15, 16, 23, 42];
    const result = sequenceClassifier(array);

    test("GET request returns status 200", async () => {
        await getLastResult()
            .then(response => expect(response.status).toBe(200))
    })

    test("GET request returns object with 2 keys", async () => {
        await getLastResult()
            .then(response => expect(Object.keys((response.data)).length).toBe(2))
    })

    test("GET request returns object with keys: input, output", async () => {
        const expected = ["input", "output"];

        await getLastResult()
            .then(response => expect(Object.keys(response.data)).toMatchObject(expected))
    })

    test("GET request returns correct data", async () => {
        const input = convert(array);
        const output = classifyByNumber(result);
        const expected = {input: input, output: output}

        await addResult({input: input, output: output});
        await getLastResult()
            .then(response => expect(response.data).toMatchObject(expected))
    })

    test("POST request to add new sequence returns status 200", async () => {
        await addResult({input: convert(array), output: classifyByNumber(result)})
            .then(response => expect(response.status).toBe(200))
    })

    test("POST request with empty data returns status 400", async () => {
        await addResult({input: convert(array)})
            .then()
            .catch(error => expect(error.response.status).toBe(400))
    })
})