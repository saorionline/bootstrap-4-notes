import React from "react";
import { Link } from "react-router-dom";
import { blendata } from "../data/blendata"

function Blendpage() {
    return (
        <>
        <h1>Extraer sabor</h1>
        <ul>
            { blendata.map ( post => (
                <BlendLink post = { post }/>
            ))}
        </ul>
        </>
    );
}

function BlendLink ({ post }) {
    return (
        <li>
            <Link to= {`/blend/${post.slog}`} > { post.title } </Link>
        </li>
    );
}
export {Blendpage}