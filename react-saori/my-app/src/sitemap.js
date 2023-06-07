import React from 'react';
import { Link } from 'react-router-dom';

function Sitemap() {
    return (
        /*
        <nav>
            <ul>
                <li id="highInt">Tienda
                    <ul class="inner-menu">
                        <li id="me">Café Especial
                                <ul class="inner-menu">
                                    <li id="me">Blends</li>
                                    <li id="me">Single Origin</li>
                                    <li id="me">Cold Bred</li>
                                    <li id="me">Kits</li>
                                    <li id="me">Métodos</li>
                                </ul>
                        </li>
                        <li>Merch</li>
                    </ul>
                </li>  
            </ul>
        </nav>   
        Taken from https://codesandbox.io/p/github/saorionline/Coffee-Shop/BackGround */      
        <nav>
            <ul>
                <li>
                    <Link to="/"> Café Especial</Link>
                    <ul>
                        <li>
                            <Link to="/pages/blend">Blends</Link>
                        </li>
                        <li>
                            <Link to="/pages/single">Single Origin</Link>
                        </li>
                        <li>
                            <Link to="/pages/coldbred">Cold Bred</Link>
                        </li>                        
                        <li>
                            <Link to="/pages/kit">Kits</Link>
                        </li>
                        <li>
                            <Link to="/pages/barista">Barista</Link>
                        </li>                                                
                    </ul>
                </li>
            </ul>
        </nav>   
    );
}

export {Sitemap}