import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "./auth";

function Sitemap() {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {routes.map(route => {
                
                if (route.publicOnly && auth.user) return null;
                if (route.private && !auth.user) return null;
                
                return(
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
                    );
                })}  
            </ul> 
        </nav>          
    );
}
const routes = [];
routes.push({
    to: "/",
    text: "Café Especial",
    private: false,
});
routes.push({
    to: "/pages/blend",
    text: "Blends",
    private: false,
});
routes.push({
    to: "/pages/single",
    text: "Single Origin",
    private: false,
});
routes.push({
    to: "/pages/coldbred",
    text: "Cold Bred",
    private: false,
});
routes.push({
    to: "/pages/kit",
    text: "Kits",
    private: false,
});
routes.push({
    to: "/pages/barista",
    text: "Barista",
    private: false,
});
routes.push({
    to: "/login",
    text: "Registro",
    private: false,
    publicOnly: true,
});
routes.push({
    to: "/logout",
    text: "Cerrar Sesión",
    private: true,
});
routes.push({
    to: "/profile",
    text: "Profile",
    private: true,
})
export {Sitemap};