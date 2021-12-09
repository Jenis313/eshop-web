// axios is a third party utility file it can be replaced in the future so we are making this httpClient.js utility file so that we can use any package in the future but we don't have to change code in several places

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const http = axios.create({
    baseURL : BASE_URL,
    responseType: 'json',
    timeout: 20000,
    timeoutErrorMessage: 'Request Timeout'
})
const getHeaders = (isSecured = false) => {
    let options = {
        'Content-Type' : 'application/json'
    }
    if(isSecured){
        // If we want something to be accessed only if there's  valid token then we pass isSecured parameter as true whenever we call httpClient
        options['Authorization'] = localStorage.getItem('token')
    }
    return options;
}
const GET = (url, isSecured = false, params = {}) => {
    return http.get(url, {
        headers : getHeaders(isSecured),
        params
    })
}
const POST = (url, data, isSecured = false, params = {}) => {
    return http.post(url, data, {
        headers : getHeaders(isSecured),
        params
    })
}
const PUT = (url, data, params = {}) => {
    return http.put(url, data, {
        headers : getHeaders(),
        params
    })
}
const DELETE = (url, isSecured = false, params) => {
    return http.delete(url, {
        headers : getHeaders(isSecured),
        params
    })
}

export const httpClient = {
    GET,
    POST,
    PUT,
    DELETE
}