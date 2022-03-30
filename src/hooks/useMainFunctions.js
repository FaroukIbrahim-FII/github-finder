import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { get_user_data, clear_user_data } from "../redux/actions/userActions";
import {
  get_users_data,
  clear_users_data,
} from "../redux/actions/usersActions";
import {
  get_user_repos,
  clear_user_repos,
} from "../redux/actions/reposActions";

function useMainFunctions() {
  const [flag, setFlag] = useState(false);
  const [searchFlag, setSearchFlag] = useState(false);
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  async function getData(e) {
    e.preventDefault();
    clearData();
    const name = e.target.searchusers.value;
    if (name !== "") {
      setFlag(true);
      setSearchFlag(false);
    } else {
      setSearchFlag(true);
    }
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=undefined&client_secret=undefined`
    );
    dispatch(get_users_data(data.items));
    setFlag(false);
  }
  function clearData() {
    dispatch(clear_users_data());
  }
  async function getUser(loginName) {
    dispatch(clear_user_data());
    dispatch(clear_user_repos());
    const { data } = await axios.get(
      `https://api.github.com/users/${loginName}?client_id=undefined&client_secret=undefined`
    );
    const repoResponse = await axios.get(
      `https://api.github.com/users/${loginName}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`
    );
    dispatch(get_user_data(data));
    dispatch(get_user_repos(repoResponse.data));
  }
  return {
    searchFlag,
    usersList,
    flag,
    getData,
    clearData,
    getUser,
  };
}

export default useMainFunctions;
