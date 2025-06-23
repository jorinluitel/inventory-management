import { Navigate } from "react-router";

export default function PrivateComponent({Component}: any ){
    const token = localStorage.getItem("token");
    console.log(token, "@token from private component");

    if(!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Component />
        </div>
    );
}