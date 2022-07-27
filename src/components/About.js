import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const About=()=>{
	const [post, setPost] = React.useState(null);

	React.useEffect(() => {
	  axios.get(baseURL).then((response) => {
		setPost(response.data);
	  });
	}, []);
  
	if (!post) return null;
	console.log("PPPP:",post);
return(
    <div className="container">			
		<div className="info-details_block">
			<div className="row">
				<div className="col-sm-7">
					<div className="text_block">
						<h1 className="header">{post.title}</h1>
						<p>{post.body}</p>
					</div>
				</div>
				<div className="col-sm-5">
					<div className="image-block">
						<div className="image">
							<img src="images/about.jpg" alt="about" /> 
						</div>
						<div className="image-details">
							<div className="left-block">
								<h4 className="titel">"Strangers" by Beatrice Boyle</h4>
							</div>
							<div className="right-block">
								<p>Oil on canvas</p>
								<p>145 x 175 cm</p>
								<p>2018</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
};
export default About;