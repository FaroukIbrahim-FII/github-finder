import React from "react";
import "./css/main.css";
import { Link } from "react-router-dom";
import Spinner from "./common/spinner";
import useMainFunctions from "../hooks/useMainFunctions";

function Main() {
  const { searchFlag, usersList, flag, getData, clearData, getUser } =
    useMainFunctions();

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
                <img src={item.avatar_url} alt="" />
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
