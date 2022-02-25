import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { get_user_data } from "../redux/actions/userActions";
import { get_user_repos } from "../redux/actions/reposActions";
import { useParams } from "react-router-dom";

function useUserFunctions() {
  const userData = useSelector((state) => state.userDetail);
  const userRepos = useSelector((state) => state.userRepos);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (userData.length === 0 || userRepos.length === 0) {
      async function getUser(loginName) {
        const { data } = await axios.get(
          `https://api.github.com/users/${loginName}?client_id=undefined&client_secret=undefined`
        );
        const repoResponse = await axios.get(
          `https://api.github.com/users/${loginName}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`
        );
        dispatch(get_user_data(data));
        dispatch(get_user_repos(repoResponse.data));
      }
      getUser(params.id);
    }
  });
  return {
    userData,
    userRepos,
  };
}

export default useUserFunctions;
