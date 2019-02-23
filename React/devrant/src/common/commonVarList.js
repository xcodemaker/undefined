/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

const ERROR_MESSAGES = {
    LOGIN_USERNAME_EMPTY: 'Username is required !',
    LOGIN_USERNAME_INVALID: 'Username is invalid !',
    LOGIN_PASSWORD_EMPTY: 'Password is required !',
    LOGIN_RESPONSE_INVALID_CREDENTIALS : 'Invalid username or password',

    ADD_RANT_RANT_BODY_EMPTY: 'Rant content is required !',
    ADD_RANT_RESPONSE_ERROR: 'Failed to add new rant !',
    DELETE_RANT_RESPONSE_ERROR: 'Failed to delete rant !',

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

    RANT_DETAILS : 'https://api.devrant.thusitha.site/v1/post.details',
    RANT_LIST : 'https://api.devrant.thusitha.site/v1/post.list',
    VOTE : 'https://api.devrant.thusitha.site/v1/post.vote',
    ADD_RANT : 'https://api.devrant.thusitha.site/v1/post.add',
    DELETE_RANT : 'https://api.devrant.thusitha.site/v1/post.delete'
}

const PUBSUB_TOPICS = {
    REFRESH_RANT_LIST : 'REFRESH_RANT_LIST',
    REFRESH_RANT_DETAILS : 'REFRESH_RANT_DETAILS',
    ALERT : 'ALERT',
    SHOW_LOGIN : 'SHOW_LOGIN'
}

export {
    // CONSTANTS,
    ERROR_MESSAGES,
    API_URLS,
    PUBSUB_TOPICS,
    API_ERROR_MESSAGES
}