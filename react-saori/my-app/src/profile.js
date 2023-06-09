import React from "react";
import { useAuth } from "./auth";

function Profile() {
    const auth = useAuth();

    return(
        <>
            <h1>Avatar</h1>
            <p>Hola, {auth.user.username} </p>
        </>
    );
}

export { Profile };