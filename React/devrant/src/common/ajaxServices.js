/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import axios from 'axios'

let get = (url, params, headers) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers:headers
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

export {
    get
}