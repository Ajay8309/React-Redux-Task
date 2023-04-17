import React from "react";
import { Provider } from "react-redux";
import postsReducer from "./redux/postsReducer";
import { configureStore } from "@reduxjs/toolkit";
import DashboardTablePage from "./components/DashboardTablePage";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <DashboardTablePage />
      </div>
    </Provider>
  );
}
