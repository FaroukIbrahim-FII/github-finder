import React from "react";
import { Link } from "react-router-dom";
import { badgesList } from "./common/listOfBadges";
import UserBadgesList from "./common/UserBadgesList";

import axios from "axios";
import "./css/detailedUser.css";
import Spinner from "./common/spinner";
import useUserFunctions from "../hooks/useUserFunctions";

function DetailedUser() {
  const { userData, userRepos } = useUserFunctions();

  return (
    <div>
      {userData.length === 0 && userRepos.length === 0 ? (
        <Spinner />
      ) : (
        <div>
          <div id="backdiv">
            <Link to="/" id="backhome">
              Back To Search
            </Link>
          </div>
          <div id="profilecard" className="card">
            <div id="infodiv">
              <img src={userData.avatar_url} alt="" />
              {userData.name && <h1>{userData.name}</h1>}
              {userData.location && <p>Location: {userData.location}</p>}
            </div>
            <div id="textdiv">
              {userData.bio && (
                <div>
                  <h3>Bio</h3>
                  <p>{userData.bio}</p>
                </div>
              )}
              <a href={userData.html_url}>Visit Github Profile</a>
              <ul>
                <li>
                  <strong>Name:</strong> {userData.login}
                </li>
                {userData.company && (
                  <li>
                    <strong>Company:</strong> {userData.company}
                  </li>
                )}
                {userData.blog !== "" && (
                  <li>
                    <strong>Website:</strong> {userData.blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="card badges">
            {badgesList.map((item) => (
              <UserBadgesList
                className={item.class}
                param={userData[item.value]}
                key={item.class}
              />
            ))}
          </div>
          {userRepos.map((item) => {
            return (
              <div className="card" id="reposdiv" key={item.id}>
                <h3>
                  <a href={item.html_url}>{item.name}</a>
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DetailedUser;
