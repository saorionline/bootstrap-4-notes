import React from "react";
import { Link, useParams } from "react-router-dom";
import { blendata } from "../data/blendata"; 

function Blendpost() {
    const { slog } = useParams();
    const blendpost = blendata.find(post => post.slog === slog);

    return (
        <>
            <h2>{blendpost.title}</h2>
            <p>{blendpost.content}</p>
            <p>{blendpost.date}</p>

        </>
    )
}

export { Blendpost };