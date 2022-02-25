export const get_user_data = (item) => {
  return {
    type: "GET_USER_DATA",
    payload: item,
  };
};
export const clear_user_data = () => {
  return {
    type: "CLEAR_USER_DATA",
  };
};
