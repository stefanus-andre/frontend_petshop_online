import {Route, Routes} from "react-router-dom";
import Register from "../auth/Register.jsx";
import App from "../App.jsx";
import Login from "../auth/Login.jsx";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}