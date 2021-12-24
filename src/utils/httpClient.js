// axios is a third party utility file it can be replaced in the future so we are making this httpClient.js utility file so that we can use any package in the future but we don't have to change code in several places

import axios from "axios";
import { FaPray } from "react-icons/fa";
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
const PUT = (url, data, isSecured = true, params = {}) => {
    return http.put(url, data, {
        headers : getHeaders(isSecured),
        params
    })
}
const DELETE = (url, isSecured = false, params) => {
    return http.delete(url, {
        headers : getHeaders(isSecured),
        params
    })
}
const UPLOAD = (url, data = {}, files = []) => {
    return new Promise((resolve, reject) => {
        // for uploading files we are usin xmlhttprequest
        // we are sending value as form data
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        // append files in form data
        // This will work for both single and multiple files
        files.forEach(item => {
            formData.append('images', item, item.name)
        })
        // append textual data in formdata
        for(let key in data){
            formData.append(key, data[key])
        }
        xhr.onreadystatechange = () => {
            // console.log(xhr.readyState)
            if(xhr.readyState === 4){
                console.log('status--> ',xhr.status)
                if(xhr.status === 200){
                    resolve(xhr.response)
                }else{
                    reject(xhr.response)
                }
            }
        }
        xhr.open('POST', `${BASE_URL}${url}?token=${localStorage.getItem('token')}`, true);
        xhr.send(formData);

    })
}

export const httpClient = {
    GET,
    POST,
    PUT,
    DELETE,
    UPLOAD
}