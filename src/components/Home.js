import React from "react";
import TopBody from "../components/TopBody";
import Artisthome from "../components/Artisthome";
import Auctionhome from "../components/Auctionhome";
import Luddspacehome from "../components/Luddspacehome";
import Banner from "../components/Banner";

const Home=()=>{
return(
	<div className="main_body">
		<Banner />
		<TopBody />
		<Artisthome />
		<Auctionhome />
		<Luddspacehome />
	</div>
);
};
export default Home;