import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blendata } from "../data/blendata"; 

function Blendpost() {
    const navigate = useNavigate();
    const { slog } = useParams();
    const blendpost = blendata.find(post => post.slog === slog);

    const returnToBlend = () => {
        navigate("../pages/blend")
    };

    return (
        <>
            <h2>{blendpost.title}</h2>
            <p>{blendpost.content}</p>
            <p>{blendpost.date}</p>
            <button onClick={returnToBlend}> Return</button>
        </>
    )
}

export { Blendpost };

//In the Tutorial "Curso de React.js" useNavigate capt is BlogPost.js