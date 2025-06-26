import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";
import Login from "./pages/login/Login";
import PrivateComponent from "./components/PrivateComponent";
import SignUP from "./pages/signup/SignUp";
import AuthComponent from "./components/AuthComponent";

export default function AppRoute(){
    return(
        <Routes>
            <Route path="/login" element={<AuthComponent Component={Login}/>}/>
            <Route path="/signup" element={<AuthComponent Component={SignUP} />}/>
            <Route 
                path="/dashboard" 
                element={<PrivateComponent Component={Dashboard} />}
            >
                <Route path="product" element={ <Product />}/>
                <Route path="users" element={<Users />} />
                <Route path="category" element={<Category />} />
            </Route>
        </Routes>
    );
}