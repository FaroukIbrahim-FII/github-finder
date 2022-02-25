export const get_users_data = (item) => {
  return {
    type: "GET_USERS_DATA",
    payload: item,
  };
};
export const clear_users_data = () => {
  return {
    type: "CLEAR_USERS_DATA",
  };
};
