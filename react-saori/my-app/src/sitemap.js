import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sitemap() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key= {route.to}>
                        
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
    to: "/pages/single",
    text: "Single Origin",
});
routes.push({
    to: "/pages/coldbred",
    text: "Cold Bred",
});
routes.push({
    to: "/pages/kit",
    text: "Kits",
});
routes.push({
    to: "/pages/barista",
    text: "Barista",
});
routes.push({
    to: "/login",
    text: "Registro",
});
routes.push({
    to: "/logout",
    text: "Cerrar Sesión",
});
routes.push({
    to: "/profile",
    text: "Profile",
})
export {Sitemap};