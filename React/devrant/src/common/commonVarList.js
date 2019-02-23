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

const API_ERROR_MESSAGES = {
    ACCESS_DENIED:	'Invalid token or no access is granted',
    MISSING_CONTENT:	'Content is missing in the request body',
    INVALID_POST_ID:	'Post ID is not valid or not found',
    MISSING_DIRECTION:	'Vote direction is not available. Available values are up, down and reset',
    AUTHOR_CANNOT_VOTE:	'Post author can not vote on his/her post',
    SERVER_ERROR:	'A server side error has been occurred'
}

const API_URLS = {
    USER_ACTIVATE: 'https://api.devrant.thusitha.site/v1/user.activate',
    USER_DEACTIVATE: 'https://api.devrant.thusitha.site/v1/user.deactivate',

    RANT_LIST : 'https://api.devrant.thusitha.site/v1/post.list',
    VOTE : 'https://api.devrant.thusitha.site/v1/post.vote'
}

const PUBSUB_TOPICS = {
    REFRESH_RANT_LIST : 'REFRESH_RANT_LIST',
    ALERT : 'ALERT'
}

export {
    // CONSTANTS,
    ERROR_MESSAGES,
    API_URLS,
    PUBSUB_TOPICS,
    API_ERROR_MESSAGES
}