const ERROR_MESSAGES = {
    LOGIN_USERNAME_EMPTY: 'Username is required !',
    LOGIN_PASSWORD_EMPTY: 'Password is required !',
    LOGIN_RESPONSE_INVALID_CREDENTIALS : 'Invalid username or password'
};

const BASE_URL="https://api.devrant.thusitha.site";
const USER_ACTIVATE=BASE_URL+"/v1/user.activate"; 
const USER_DEACTIVATE=BASE_URL+"/v1/user.deactivate"; 


export default ERROR_MESSAGES;
export {USER_ACTIVATE,USER_DEACTIVATE};