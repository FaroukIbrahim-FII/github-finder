import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_user_data } from "../redux/actions/userActions";
import { get_user_repos } from "../redux/actions/reposActions";
import { get_users_data } from "../redux/actions/usersActions";
import axios from "axios";
import { clear_users_data } from "../redux/actions/usersActions";
import "./css/main.css";
import { Link } from "react-router-dom";
import Spinner from "./common/spinner";
import useMainFunctions from "../hooks/useMainFunctions";

function Main() {
  const { searchFlag, usersList, flag, getData, clearData, getUser } =
    useMainFunctions();
  // const [flag, setFlag] = useState(false);
  // const [searchFlag, setSearchFlag] = useState(false);
  // const dispatch = useDispatch();
  // async function getData(e) {
  //   e.preventDefault();
  //   dispatch(get_users_data([]));
  //   const name = e.target.searchusers.value;
  //   if (name !== "") setFlag(true);
  //   if (name === "") setSearchFlag(true);
  //   if (name !== "") setSearchFlag(false);
  //   const { data } = await axios.get(
  //     `https://api.github.com/search/users?q=${name}&client_id=undefined&client_secret=undefined`
  //   );
  //   dispatch(get_users_data(data.items));
  //   setFlag(false);
  // }
  // const usersList = useSelector((state) => state.usersList);
  // function clearData() {
  //   dispatch(clear_users_data());
  // }
  // async function getUser(loginName) {
  //   dispatch(get_user_data([]));
  //   dispatch(get_user_repos([]));
  //   const { data } = await axios.get(
  //     `https://api.github.com/users/${loginName}?client_id=undefined&client_secret=undefined`
  //   );
  //   const repoResponse = await axios.get(
  //     `https://api.github.com/users/${loginName}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`
  //   );
  //   dispatch(get_user_data(data));
  //   dispatch(get_user_repos(repoResponse.data));
  // }

  return (
    <div id="maindiv">
      {searchFlag && <p id="wanring">Please enter something</p>}
      <form id="mainform" onSubmit={getData}>
        <input
          type="text"
          placeholder="Search Users"
          id="searchusers"
          name="searchusers"
        />
        <input type="submit" name="submit" id="submitbutton" value="Search" />
      </form>

      {usersList.length !== 0 && (
        <button id="clearbtn" onClick={clearData}>
          Clear
        </button>
      )}
      {usersList.length === 0 && flag ? (
        <Spinner />
      ) : (
        <div id="cardiv">
          {usersList.map((item) => {
            return (
              <div id="card1" key={item.id}>
                <img src={item.avatar_url} alt="image" />
                <h3>{item.login}</h3>
                <Link
                  onClick={() => getUser(item.login)}
                  to={`/user/${item.login}`}
                >
                  More
                </Link>
                {/* () => getUser(item.login) */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
