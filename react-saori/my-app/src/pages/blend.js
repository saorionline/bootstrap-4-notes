import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blendata } from "../data/blendata"

function Blendpage() {
    return (
        <>
        <h1>Extraer sabor</h1>
        <Outlet/>
        <ul>
            { blendata.map ( post => (
                <BlendLink key= { post.slog } post= { post }/>
            ))}
        </ul>
        </>
    );
}

function BlendLink ({ post }) {
    return (
        <li>
            <Link to= {`${post.slog}`} > { post.title } </Link>
        </li>
    );
}
export {Blendpage};

//In the Tutorial "Curso de React.js" useNavigate capt is BlogPage.js