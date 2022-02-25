const GET_USER_REPOS = "GET_USER_REPOS";
const CLEAR_USER_REPOS = "CLEAR_USER_DATA";

const reposReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_REPOS:
      return action.payload;
    case CLEAR_USER_REPOS:
      return [];
    default:
      return state;
  }
};
export default reposReducer;
