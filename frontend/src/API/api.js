import axios from 'axios';

const URL = 'https://seqapi/api/';

export const getLastResult = async () => {
    return await axios.get(URL)
}

export const addResult = async (data) => {
    return await axios.post(URL, data)
}