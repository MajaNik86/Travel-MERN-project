import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import  NewPlace from "./places/pages/NewPlace";
import {MainNavigation} from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <>
    <MainNavigation/>
    <main>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces/>}></Route>
      <Route path="/places/new" element={<NewPlace/>}/>
    </Routes>
    </main>
    </>
  );
};

export default App;
