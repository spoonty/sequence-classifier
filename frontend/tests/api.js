const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const URL = 'https://seqapi/api/';

const getLastResult = async () => {
    return await axios.get(URL, {httpsAgent})
}

const addResult = async (data) => {
    return await axios.post(URL, data, {httpsAgent})
}

module.exports = {getLastResult,
                  addResult}