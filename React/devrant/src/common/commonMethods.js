/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

let storeAuthData = (username, token) => {
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
}

let getAuthData = () => {
    let auth = {username:'', token:''}

    auth.username = localStorage.getItem('username')
    auth.token = localStorage.getItem('token')

    return auth
}

let clearLocalStorage = () => {
    localStorage.clear()
}

export {
    storeAuthData,
    getAuthData,
    clearLocalStorage
}