import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, userRemoved, userSelected } from "./usersSlice";

export function usersTable() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.entities);
  const loading = useSelector((state) => state.users.loading);
  const selectedUser = useSelector((state) => state.users.selectedUser);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchUsers());
    }
  }, [loading, dispatch]);

  const handleSelect = (event) => {
    dispatch(userSelected(Number(event.target.value)));
  };

  return (
    <div>
      {
        <div style={{ color: "blue", paddingBottom: 15 }}>
          {" "}
          REDUX ASSIGNMENT BY - Priyanshu Bharati
        </div>
      }
      {loading === "loading" && <div>Loading...</div>}
      <select onChange={handleSelect}>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.id} - {user.username}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.id === selectedUser)
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* <button onClick={() => dispatch(userRemoved(user.id))}>
                    Remove
                  </button> */}

                  <button
                    onClick={() => {
                      dispatch(userRemoved(user.id));
                      window.location.reload();
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default usersTable;
