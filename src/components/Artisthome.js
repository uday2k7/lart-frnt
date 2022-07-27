import React from "react";

const Artisthome=()=>{
return(
    <div className="image-slider_block artists_block">
				<div className="page_header">
					<h1 className="header-text">ARTISTS</h1>
					<div className="see-all">
						<a href="" className="see-all_link">SEE ALL ARTISTS</a>
					</div>
				</div>
				<div className="slider_block">
						<div id="artists" className="carousel slide" data-ride="carousel" data-interval="false">
						  <div className="carousel-inner no-padding">
                          
							<div className="carousel-item active">
							  <div className="col-1-5 slider-box">
								<img src="images/Adia-Wahid.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Adia Wahid</h3>
								</div>
							  </div>    
							  <div className="col-1-5 slider-box">
								<img src="images/Alvin-Ong.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Alvin Ong</h3>
								</div>
							  </div>   
							  <div className="col-1-5 slider-box">
								<img src="images/Be-Andr.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Beatrice Boyle</h3>
								</div>
							  </div> 
							  <div className="col-1-5 slider-box">
								<img src="images/Beatrice-Boyle.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Ben Edmunds</h3>
								</div>
							  </div>
                              <div className="col-1-5 slider-box">
								<img src="images/Ben-Edmunds.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Ben Edmunds</h3>
								</div>
							  </div>
							  
							</div>

						  </div>
						</div>
				</div>
			</div>
);
};
export default Artisthome;