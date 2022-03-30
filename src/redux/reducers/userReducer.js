const GET_USER_DATA = "GET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_DATA:
      const newState = action.payload;
      return newState;
    case CLEAR_USER_DATA:
      return [];
    default:
      return state;
  }
};
export default userReducer;
