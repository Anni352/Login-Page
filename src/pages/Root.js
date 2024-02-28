import logo from '../assets/logo.png';
import'./Header.css';
import { Outlet } from "react-router-dom";

function RootLayout(){
    return (
        <>
            <header>
                <img src={logo} alt="A user" />
                <h1>Login Page</h1>
            </header>
            <Outlet />
        </>
    );
}

export default RootLayout;