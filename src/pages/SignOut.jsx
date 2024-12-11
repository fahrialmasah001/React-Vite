import { useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("loginForm");
        navigate("/login");
    }, []);
}

export default SignOut