// axios is a third party utility file it can be replaced in the future so we are making this httpClient.js utility file so that we can use any package in the future but we don't have to change code in several places

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const http = axios.create({
    baseURL : BASE_URL,
    responseType: 'json',
    timeout: 20000,
    timeoutErrorMessage: 'Request Timeout'
})
const GET = (url, data, params) => {

}
const POST = (url, data, params) => {

}
const PUT = (url, data, params) => {

}
const DELETE = (url, data, params) => {

}