import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import UsersTable from "./usersTable";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersTable />
      </div>
    </Provider>
  );
}

export default App;
