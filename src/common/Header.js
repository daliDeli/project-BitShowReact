import React from 'react';
import { Link } from "react-router-dom";
import Search from "./Search";

export const Header = () => {
    return (
        <header className="container-fluid">
            <nav className="row navbar navbar-dark justify-content-between">
                
                <Link to="/" className="navbar-brand col-3 col-md-4" id="bitshow"><h2>BitShow</h2></Link>
            
                <form className="form-inline col-4 col-md-4 ">
                    <Search />
                </form>
        
            </nav>
        </header>
    );
}
