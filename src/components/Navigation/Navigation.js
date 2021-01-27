import React from 'react';
import './Navigation.css';
import logo from './logo.svg';

const Navigation = () => {
    return (
        <div className="navigate">
            <div className="nav">
                <img className="pic" src={logo}/>
                <ul className="ul1">
                    <li className="li">Features</li>
                    <li className="li">Pricing</li>
                    <li className="li">Resources</li>
                </ul>
                <ul className="ul2">
                    <li className="li">Login</li>
                    <button className="but">Sign Up</button>
                </ul>
           </div>
        </div> 
    )
}

export default Navigation;