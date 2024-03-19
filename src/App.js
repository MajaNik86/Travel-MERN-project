import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import { NewPlace } from "./places/pages/NewPlace";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/places/new" element={<NewPlace/>}/>
    </Routes>
  );
};

export default App;
