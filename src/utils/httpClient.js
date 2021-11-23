// axios is a third party utility file it can be replaced in the future so we are making this httpClient.js utility file so that we can use any package in the future but we don't have to change code in several places

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const http = axios.create({
    baseURL : BASE_URL,
    responseType: 'json',
    timeout: 20000,
    timeoutErrorMessage: 'Request Timeout'
})
const getHeaders = () => {
    let options = {
        'Content-Type' : 'application/json'
    }
    return options;
}
const GET = (url, params = {}) => {
    return http.get(url, {
        headers : getHeaders(),
        params
    })
}
const POST = (url, data, params = {}) => {
    return http.post(url, data, {
        headers : getHeaders(),
        params
    })
}
const PUT = (url, data, params = {}) => {
    return http.put(url, data, {
        headers : getHeaders(),
        params
    })
}
const DELETE = (url, params) => {
    return http.delete(url, {
        headers : getHeaders(),
        params
    })
}

export const httpClient = {
    GET,
    POST,
    PUT,
    DELETE
}