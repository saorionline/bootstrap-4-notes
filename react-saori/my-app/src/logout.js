import React from "react";
import { useAuth } from "./auth";

function Logout() {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    };
    return(
        <>
            <h1> Sesión Finalizada </h1>
            <form onSubmit={ logout }>
                <h3> Recuerda que puedes volver cuando desees!</h3>

                <button type = "submit"> Submit </button>
            </form>
        </>

    );
}

export { Logout} ;