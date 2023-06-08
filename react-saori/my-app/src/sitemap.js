import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sitemap() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li>
                        
                    <NavLink 
                      style={({ isActive}) => ({
                        color: isActive ? "salmon" : "pink",
                        })}
                        to={route.to}
                        >
                        {route.text}
                        </NavLink>
                    </li>
                ))}  
            </ul> 
        </nav>          
    );
}
const routes = [];
routes.push({
    to: "/",
    text: "Café Especial",
});
routes.push({
    to: "/pages/blend",
    text: "Blends",
});
routes.push({
    to: "/single",
    text: "Single Origin",
});
routes.push({
    to: "/coldbred",
    text: "Cold Bred",
});
routes.push({
    to: "/kit",
    text: "Kits",
});
routes.push({
    to: "/barista",
    text: "Barista",
});

export {Sitemap}