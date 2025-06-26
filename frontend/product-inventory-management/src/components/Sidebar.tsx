import { Button } from "@mantine/core";
import { NavLink, useNavigate } from "react-router";

export default function sidebar(){

    const navigate = useNavigate();

    function handleSignOut(){
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <div className="sidebar text-white bg-blue-950 w-2xs p-5">
            <div className="navigation-menu flex flex-col">
                <NavLink to="product">Poduct</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="category">Category</NavLink>

                <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
        </div>
    );
}