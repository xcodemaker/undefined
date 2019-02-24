const ERROR_MESSAGES = {
  LOGIN_USERNAME_EMPTY: "Username is required !",
  LOGIN_PASSWORD_EMPTY: "Password is required !",
  LOGIN_RESPONSE_INVALID_CREDENTIALS: "Invalid username or password"
};

const BASE_URL = "https://api.devrant.thusitha.site";
const USER_ACTIVATE = BASE_URL + "/v1/user.activate";
const USER_DEACTIVATE = BASE_URL + "/v1/user.deactivate";
const GET_POST_LIST = BASE_URL + "/v1/post.list";
const VOTE = BASE_URL + "/v1/post.vote";
const ADD_NEW_POST=BASE_URL+"/v1/post.add";
const POST_DETAILS=BASE_URL+"/v1/post.details?postId=";
const POST_DELETE=BASE_URL+"/v1/post.delete";
const COMMENT_DELETE=BASE_URL+"/v1/comment.delete";

export default ERROR_MESSAGES;
export { USER_ACTIVATE, USER_DEACTIVATE, GET_POST_LIST, VOTE,ADD_NEW_POST,POST_DETAILS,POST_DELETE,COMMENT_DELETE };
