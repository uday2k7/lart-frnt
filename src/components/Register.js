import React ,{useState } from "react";

const Register=()=>{
	const [firstName, setFirstName] = useState('');
	//const [email, setEmail] = useState('');
	//const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleFirstName = (e) => {
		setFirstName(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName === '') {
			setError(true);
		} else {
			console.log("Submit");
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
		<div
			className="error"
			style={{
			display: error ? '' : 'none',
			}}>
			<span>Please enter all the fields</span>
		</div>
		);
	};
return(
    <div className="container">				
			<div className="login-register_main-block">
            	<a href="#" className="close-popup_button">Close</a>
				<form>
					<div className="inside_box register-form_block">
						<div className="header_block">
							<h1 className="header">Register</h1>
						</div>
						<div className="row">
							<div className="col-sm-12 alert alert-danger">
								{errorMessage()}
							</div>
						</div>
						<div className="form_block">
                        	<div className="row">
								
                            	<div className="col-sm-6">
                                	<div className="form-group">
                                        <label htmlFor="first-name" className="text-info">First Name</label><br />
                                        <input type="text" onChange={handleFirstName} value={firstName} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                	<div className="form-group">
                                        <label htmlFor="surname" className="text-info">Surname</label><br />
                                        <input type="text" name="Surname" id="surname" className="form-control" />
                                    </div>
                                </div>
                            </div>
							<div className="form-group">
                                <label htmlFor="email" className="text-info">Email</label><br />
                                <input type="email" name="username" id="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="text-info">Phone (optional)</label><br />
                                <input type="number" name="Phone" id="phone" className="form-control" />
                            </div>
							<div className="form-group">
                                <label htmlFor="password" className="text-info">Password</label><br />
                                <input type="text" name="password" id="password" className="form-control" />
                                <span className="show-hide_password">Show password</span>
                            </div>

                            <div className="row dropdown-upload-block">
                            	
                            	<div className="col-sm-6">
                            		<div className="dropdown">
										  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										    Dropdown button
										  </button>
										  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										    <a className="dropdown-item" href="#">Action</a>
										    <a className="dropdown-item" href="#">Another action</a>
										    <a className="dropdown-item" href="#">Something else here</a>
										  </div>
									</div>
									<small className="form-text text-danger">
	                            		This field is required.
	                            	</small>
                            	</div>

                            	<div className="col-sm-6">
	                            	<div className="file-upload">
	                            		<label htmlFor="file-upload1" className="btn btn-primary upload-button custom-file-upload">UPLOAD File</label>
	                            		<input id="file-upload1" type="file" className="file-upload" name="nus" defaultValue="" />
	                            	</div>
	                            	<small className="form-text text-danger">
	                            		This field is required.
	                            	</small>                    	
                            	</div>                            	
                            </div>
                            <div className="form-group">
                                <input id="receive-text" type="checkbox" name="Beers" />
                                <label htmlFor="receive-text">Receive information and promotions from LuddArt</label>
                            </div>
                            
                            <div className="form-group">
                                <input id="terms-conditions" type="checkbox" name="Beers" />
                                <label htmlFor="terms-conditions">I accept the LuddArt <a href="#">Terms & Conditions</a></label>
                            </div>                            
						</div>                        
						<div className="submit-button_block">
						
							<button className="btn btn-lg btn-primary submit-button" type="submit" onClick={handleSubmit}>Sign in</button>
						</div>
					</div>
				</form>
			</div>
		</div>
);
};
export default Register;