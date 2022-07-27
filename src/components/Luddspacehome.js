import React from "react";

const Luddspaces=()=>{
return(
    <div className="image-slider_block luddspace_block">
				<div className="page_header">
					<h1 className="header-text">LUDDSPACE</h1>
					<div className="see-all">
						<a href="" className="see-all_link">See All</a>
					</div>
				</div>
				<div className="slider_block">
						<div id="luddspace" className="carousel slide" data-ride="carousel" data-interval="false">
						  
						  <div className="carousel-inner no-padding">
							<div className="carousel-item active">
							  <div className="col-1-5 slider-box">
								<img src="images/luddspace-1.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Blog post:</h3>
                                    <p>Welcome to LuddArt!</p>
								</div>
							  </div>
							  <div className="col-1-5 slider-box">
								<img src="images/luddspace-2.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Featured Artist:</h3>
                                    <p>Ben Edmunds</p>
								</div>
							  </div>    
							  <div className="col-1-5 slider-box">
								<img src="images/luddspace-3.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Featured artwork:</h3>
                                    <p>Beatrice Boyle</p>
								</div>
							  </div>   
							  <div className="col-1-5 slider-box">
								<img src="images/luddspace-4.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>Blog post:</h3>
                                    <p>London art fairs 2020</p>
								</div>
							  </div>   
							  <div className="col-1-5 slider-box">
								<img src="images/luddspace-5.png" alt="artist image" />
								<div className="carousel-caption">
									<h3>New artist:</h3>
                                    <p>Marcus Aitken</p>
								</div>
							  </div>   
							</div>
						  </div>
						  
						  <a className="carousel-control-prev" href="#luddspace" data-slide="prev">
							<span className="carousel-control-prev-icon"></span>
						  </a>
						  <a className="carousel-control-next" href="#luddspace" data-slide="next">
							<span className="carousel-control-next-icon"></span>
						  </a>
						</div>						
				</div>
			</div>
);
};
export default Luddspaces;