export const get_user_repos = (item) => {
  return {
    type: "GET_USER_REPOS",
    payload: item,
  };
};
export const clear_user_repos = () => {
  return {
    type: "CLEAR_USER_REPOS",
  };
};
