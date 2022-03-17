import React from "react";
import {
  fetchUsers,
  fetchUserSuccess,
  updateUsername,
} from "./redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers().then((data) => {
      console.log("this is a data", data);
      dispatch(fetchUserSuccess(data));
    });
  }, []);

  const usersList = useSelector((state) => state.usersReducer.users);

  const [newUserName, setNewUserName] = useState();

  return (
    <div className="App">
      <div className="displayUsers">
        {usersList.map((user) => {
          return (
            <div>
              <h3>{user.name}</h3>
              <h4>{user.username}</h4>
              <input
                type="text"
                placeholder="New Username"
                onChange={(event) => {
                  setNewUserName(event.target.value);
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: user.id, username: newUserName })
                  )
                }
              >
                Update UserName
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
