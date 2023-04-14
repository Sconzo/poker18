import {Routes, Route, Navigate} from "react-router-dom";
import CreateRoomForm from "../components/CreateRoomForm";
import React from "react";

export const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/home" element ={<CreateRoomForm/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}
