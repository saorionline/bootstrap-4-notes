import React from "react";
import { useAuth } from "./auth";

function Login() {
    const auth = useAuth();
    const [ username, setUsername] = React.useState("");

    const login = (e) => {
        e.preventDefault();
        auth.login ({ username });
    };



    return(
        <>
            <h1> Registro </h1>
            <form onSubmit={ login }>
                <label> Nombre de usuario:</label>
                <input
                    value = { username }
                    onChange = { e => setUsername(e.target.value) }
                />
                <button type = "submit"> Submit </button>
            </form>
        </>
    );
}

export { Login } ;