/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

const ERROR_MESSAGES = {
    LOGIN_USERNAME_EMPTY: 'Username is required !',
    LOGIN_USERNAME_INVALID: 'Username is invalid !',
    LOGIN_PASSWORD_EMPTY: 'Password is required !',
    LOGIN_RESPONSE_INVALID_CREDENTIALS : 'Invalid username or password'
};

const API_URLS = {
    USER_ACTIVATE: 'https://api.devrant.thusitha.site/v1/user.activate',
    USER_DEACTIVATE: 'https://api.devrant.thusitha.site/v1/user.deactivate',

    RANT_LIST : 'https://api.devrant.thusitha.site/v1/post.list',
    VOTE : 'https://api.devrant.thusitha.site/v1/post.vote'
}

const PUBSUB_TOPICS = {
    REFRESH_RANT_LIST : 'REFRESH_RANT_LIST'
}

export {
    // CONSTANTS,
    ERROR_MESSAGES,
    API_URLS,
    PUBSUB_TOPICS
}