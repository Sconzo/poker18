import {Routes, Route, Navigate} from "react-router-dom";
import CreateRoomForm from "../components/CreateRoomForm";
import React from "react";
import PokerPage from "../components/PokerPage";
import User from "../components/User";

export const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/home" element ={<CreateRoomForm/>}/>
            <Route path="/user" element ={<User/>}/>
            <Route path="/poker" element ={<PokerPage/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}
