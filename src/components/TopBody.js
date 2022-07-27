import React from "react";

const Topbody=()=>{
return(
    <div className="home-text_block">
        <div className="container">
            <div className="row">
            <div className="col-sm-4 emerging-artists">
                <div className="text-box">
                    <h2 className="text-box_header"> <span>Interested in art by emerging artists?</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                    <div className="text-box_more">
                        <a className="btn btn-primary more-button" href="#" role="button">FIND OUT MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 your-artwork">
                <div className="text-box">
                    <h2 className="text-box_header"><span>Want to sell your artwork?</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                    <div className="text-box_more">
                        <a className="btn btn-primary more-button" href="#" role="button">FIND OUT MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 about-luddart">
                <div className="text-box">
                    <h2 className="text-box_header"><span>Want to find out more about LuddArt?</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                    <div className="text-box_more">
                        <a className="btn btn-primary more-button" href="#" role="button">FIND OUT MORE</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);
};
export default Topbody;