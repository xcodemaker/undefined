/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import axios from 'axios'
import * as commonMethods from "./commonMethods";

let get = (url, params) => {
    let config = {
        params: params,
        headers: {'Content-Type': 'application/json'}
    }
    setXHeader(config.headers)
    return new Promise((resolve, reject) => {
        axios.get(url, config).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

let post = (url, body, params) => {
    let request = {
        method:'post',
        url:url,
        params: params,
        data: body,
        headers: {'Content-Type': 'application/json'}
    }
    setXHeader(request.headers);

    return new Promise((resolve, reject) => {
        axios(request).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

let deleteMethod = (url, body, params) => {
    let request = {
        method:'delete',
        url:url,
        params: params,
        data: body,
        headers: {'Content-Type': 'application/json'}
    }
    setXHeader(request.headers);

    return new Promise((resolve, reject) => {
        axios(request).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}


let setXHeader = (headers) => {
    let auth = commonMethods.getAuthData()
    if(auth.token && auth.token !== ''){
        headers["X-Token"] = auth.token
    }
}

export {
    get,
    post,
    deleteMethod
}