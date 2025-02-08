import { useState } from "react";
import { login } from "../api/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password);
            localStorage.setItem("token", response.data.access_token);
            alert("Login Successful!");
        } catch (error) {
            alert("Login Failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
i