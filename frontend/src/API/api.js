import axios from 'axios';
import * as https from "https";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const URL = 'https://seqapi/api/';

export const getLastResult = async () => {
    return await axios.get(URL, {httpsAgent})
}

export const addResult = async (data) => {
    return await axios.post(URL, data, {httpsAgent})
}