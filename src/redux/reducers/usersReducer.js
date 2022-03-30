const GET_USERS_DATA = "GET_USERS_DATA";
const CLEAR_USERS_DATA = "CLEAR_USERS_DATA";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      const newState = [...action.payload];
      return newState;
    case CLEAR_USERS_DATA:
      return [];
    default:
      return state;
  }
};
export default usersReducer;
