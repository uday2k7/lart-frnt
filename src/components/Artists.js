import React from "react";

const Artists=()=>{
return(
    <div className="container">			
	<div className="filter_block">
		<div className="filter_header">
			<h2 className="header-text">Artists</h2>
		</div>
		<div className="filter_right-block">
		
			<div className="filter-box">
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#filter-artists">
					Filter Artists
				</button>
				<div className="modal filter_popup-block" id="filter-artists">
					<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
						<h4 className="modal-title">Filter artists</h4>
						<p>Filter artists based on the details of their artwork</p>
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						</div>
						<div className="modal-body">
						
						<div className="filter-list_block">
							<div className="row">
								<div className="col-sm-3">
									<div className="filter-list_box mediums">
									<div className="filter-list_header">
										<h2 className="header">Mediums</h2>
										<button type="button" className="btn btn-secondary info-button" data-toggle="tooltip" data-placement="top" title="Select Mediums">
											info
										</button>
									</div>
									<ul className="filter-all-list">
										<li>
											<div className="filter-list">
												<input id="Any" type="checkbox" name="Any" />
												<label htmlFor="Any">Any</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="Painting" type="checkbox" name="Painting" />
												<label htmlFor="Painting">Painting</label>
											</div>
											<ul className="sub_filter-list">
												<li>
													<div className="filter-list">
														<input id="Oil" type="checkbox" name="Oil" />
														<label htmlFor="Oil">Oil</label>
													</div>
												</li>
												<li>
													<div className="filter-list">
														<input id="Watercolour" type="checkbox" name="Watercolour" />
														<label htmlFor="Watercolour">Watercolour</label>
													</div>
												</li>
												<li>
													<div className="filter-list">
														<input id="Acrylic" type="checkbox" name="Acrylic" />
														<label htmlFor="Acrylic">Acrylic</label>
													</div>
												</li>
											</ul>
										</li>
										<li>
											<div className="filter-list">
												<input id="Drawing" type="checkbox" name="Drawing" />
												<label htmlFor="Drawing">Drawing</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Print" type="checkbox" name="Print" />
												<label htmlFor="Print">Print</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Sculpture" type="checkbox" name="Sculpture" />
												<label htmlFor="Sculpture">Sculpture</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Jewellery" type="checkbox" name="Jewellery" />
												<label htmlFor="Jewellery">Jewellery</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="digital-illustration" type="checkbox" name="Digital illustration" />
												<label htmlFor="digital-illustration">Digital illustration</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Textiles" type="checkbox" name="Textiles" />
												<label htmlFor="Textiles">Textiles</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="mixed-media" type="checkbox" name="Mixed media" />
												<label htmlFor="mixed-media">Mixed media</label>
											</div>
										</li>
										
									</ul>
									
									
								</div>
								</div>
								<div className="col-sm-3">
									<div className="filter-list_box colour">
									<div className="filter-list_header">
										<h2 className="header">Colour</h2>
										<button type="button" className="btn btn-secondary info-button" data-toggle="tooltip" data-placement="top" title="Select Colour">
											info
										</button>
									</div>
									<ul className="filter-all-list">
										<li>
											<div className="filter-list">
												<input id="Any2" type="checkbox" name="Any" />
												<label htmlFor="Any2">Any</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="Red" type="checkbox" name="Red" />
												<label htmlFor="Red">Red</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="Blue" type="checkbox" name="Blue" />
												<label htmlFor="Blue">Blue</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Yellow" type="checkbox" name="Yellow" />
												<label htmlFor="Yellow">Yellow</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Green" type="checkbox" name="Green" />
												<label htmlFor="Green">Green</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Orange" type="checkbox" name="Orange" />
												<label htmlFor="Orange">Orange</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Purple" type="checkbox" name="Purple" />
												<label htmlFor="Purple">Purple</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Black" type="checkbox" name="Black" />
												<label htmlFor="Black">Black</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="White" type="checkbox" name="White" />
												<label htmlFor="White">White</label>
											</div>
										</li>
										
									</ul>
									
								</div>
								</div>
								<div className="col-sm-3">
									<div className="filter-list_box size">
									<div className="filter-list_header">
										<h2 className="header">Size</h2>
										<button type="button" className="btn btn-secondary info-button" data-toggle="tooltip" data-placement="top" title="Select Size">
											info
										</button>
									</div>
									<ul className="filter-all-list">
										<li>
											<div className="filter-list">
												<input id="size1" type="checkbox" name="Any" />
												<label htmlFor="size1">Any</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="size2" type="checkbox" name="0.3m or less" />
												<label htmlFor="size2">0.3m or less</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="size3" type="checkbox" name="0.3m to 0.6m" />
												<label htmlFor="size3">0.3m to 0.6m</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="size4" type="checkbox" name="0.6m to 1m" />
												<label htmlFor="size4">0.6m to 1m</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="size5" type="checkbox" name="1m to 2m" />
												<label htmlFor="size5">1m to 2m</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="size6" type="checkbox" name="2m or more" />
												<label htmlFor="size6">2m or more</label>
											</div>
										</li>
										
									</ul>
									
								</div>
								</div>
									<div className="col-sm-3">
									<div className="filter-list_box auction-status">
									<div className="filter-list_header">
										<h2 className="header">Auction status</h2>
										<button type="button" className="btn btn-secondary info-button" data-toggle="tooltip" data-placement="top" title="Select Auction status">
											info
										</button>
									</div>
									<ul className="filter-all-list">
										<li>
											<div className="filter-list">
												<input id="Any4" type="checkbox" name="Any" />
												<label htmlFor="Any4">Any</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="currently-sale" type="checkbox" name="Currently htmlFor sale" />
												<label htmlFor="currently-sale">Currently htmlFor sale</label>
											</div>
										</li>
										<li>
											<div className="filter-list">
												<input id="sale-coming-soon" type="checkbox" name="Sale coming soon" />
												<label htmlFor="sale-coming-soon">Sale coming soon</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="not-htmlFor-sale" type="checkbox" name="Not htmlFor sale" />
												<label htmlFor="not-htmlFor-sale">Not htmlFor sale</label>
											</div>
										</li>
										
										<li>
											<div className="filter-list">
												<input id="Sold" type="checkbox" name="Sold" />
												<label htmlFor="Sold">Sold</label>
											</div>
										</li>
										
									</ul>
									
								</div>
								</div>
							</div>
							
						</div>
						</div>
						
						<div className="modal-footer">
						<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#filter-artists">
							Apply Filters
						</button>
						</div>
						
					</div>
					</div>
				</div>
			</div>
			
			
			<div className="sortby">
				<label className="sortby-titel">Sort by </label>
				<select className="browser-default custom-select sortby-select">
					<option value="1" defaultValue>Featured</option>
					<option value="2">Alphabetical</option>
					<option value="3">Recently added</option>
					<option value="4">Latest artworks</option>
				</select>
			</div>
			
			
			
			
		</div>
	</div>
	
	<div className="product-main_block artists">
		<ul className="product_list">
			<li><a href="#">
				<div className="product-image">
					<img src="images/artists-1.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/artists-2.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/artists-3.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/artists-4.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/artists-5.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			<li><a href="#">
				<div className="product-image">
					<img src="images/default-image.svg" alt="artist image" />
					<div className="carousel-caption">
						<h3>Artist Name</h3>
					</div>
				</div></a>
			</li>
			
			<div className="load-more">
				LOAD MORE...
			</div>
			
		</ul>
		
	</div>
</div>
);
};
export default Artists;