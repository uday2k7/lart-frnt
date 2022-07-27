import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
return(
    <header id="mainHeader" className="main_header">
    	 <div className="container">
			<div className="top_block">
					<div className="logo-block">
						<a href="#"><img className="logo" src="images/logo.svg" alt="logo" /></a>
					</div>
					<div className="log-in_register_block">
						<ul className="menu_list">
                        	<li>
                <Link to="/register">
                Register
                </Link>
							</li>
							<li className="">
                <Link  to="/login">
                  Log In
                </Link>
							</li>
						</ul>
					</div>
              </div>
		 </div>
         <div className="main-menu_block">
         	<div className="container">
            	<nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link"  to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/artists">
                            ARTISTS
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/auctions">
                            AUCTIONS
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/luddspaces">
                            LUDDSPACE
                          </Link>
                        </li>
                      </ul>
                      <form className="form-inline mt-2 mt-md-0 header_search-block">
                        <input className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn search-button" type="submit">Search</button>
                      </form>
                    </div>
			</nav>
            
            </div>
         </div>
    </header>
);
};
export default Header;