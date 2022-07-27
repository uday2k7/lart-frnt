import React from "react";

const Login=()=>{
return(
    <div className="container">
		<div className="login-register_main-block">
			<a href="#" className="close-popup_button">Close</a>
			<form>
				<div className="inside_box login_block">
					<div className="header_block">
						<h1 className="header">Login</h1>
					</div>
					<div className="register-here">Login below, or <a href="register-select-user-type.html">register here</a></div>
					<div className="form_block">
						<div className="form-group">
							<label htmlFor="email" className="text-info">Email</label><br />
							<input type="email" name="username" id="email" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="password" className="text-info">Password</label><br />
							<input type="text" name="password" id="password" className="form-control" />
						</div>
					</div>
					<div className="submit-button_block">
						<button className="btn btn-lg btn-primary submit-button" type="submit">Sign in</button>
					</div>
					<div className="login-other_block">
						<p className="login-other_titel">Or login with</p>
						<ul className="login_list">
							<li className="google"><a href="#">google</a></li>
							<li className="facebook"><a href="#">facebook</a></li>
							<li className="twitter"><a href="#">twitter</a></li>
						</ul>
					</div>
					<div className="forgotten-password_block">
						<a href="forgotten-password.html">Forgotten your password?</a>
					</div>
				</div>
			</form>
		</div>	
		</div>
);
};
export default Login;