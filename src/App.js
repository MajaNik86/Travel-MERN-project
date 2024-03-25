import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import  NewPlace from "./places/pages/NewPlace";
import {MainNavigation} from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <>
    <MainNavigation/>
    <main>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces/>}></Route>
      <Route path="/places/new" element={<NewPlace/>}/>
      <Route path="/places/:placeId" element={<UpdatePlace/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
    </main>
    </>
  );
};

export default App;
