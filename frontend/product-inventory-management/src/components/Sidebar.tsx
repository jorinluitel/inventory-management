import { NavLink } from "react-router";

export default function sidebar(){
    return(
        <div className="sidebar text-white bg-blue-950 w-2xs p-5">
            <NavLink to="product">Poduct</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="category">Category</NavLink>
        </div>
    );
}