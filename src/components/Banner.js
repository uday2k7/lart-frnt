import React from "react";

const Banner=()=>{
return(
    <div className="home-banner_block">
        <div id="banner-slider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#banner-slider" data-slide-to="0" className="active"></li>
                <li data-target="#banner-slider" data-slide-to="1"></li>
                <li data-target="#banner-slider" data-slide-to="2"></li>
                <li data-target="#banner-slider" data-slide-to="3"></li>
            </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="images/home-banner.jpg" alt="home banner" />
                        <div className="carousel-caption">
                            <h3>Featured artist: Alvin Ong</h3>
                            <p>Alvin Ong synthesizes mythologies, histories and the anecdotal into non-linear narratives and surreal improvisations...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img src="images/banner.jpg" alt="home banner" />
                        <div className="carousel-caption">
                            <h3>Featured artist: Alvin Ong</h3>
                            <p>Alvin Ong synthesizes mythologies, histories and the anecdotal into non-linear narratives and surreal improvisations...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img src="images/banner.jpg" alt="home banner" />
                        <div className="carousel-caption">
                            <h3>Featured artist: Alvin Ong</h3>
                            <p>Alvin Ong synthesizes mythologies, histories and the anecdotal into non-linear narratives and surreal improvisations...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img src="images/banner.jpg" alt="home banner" />
                        <div className="carousel-caption">
                            <h3>Featured artist: Alvin Ong</h3>
                            <p>Alvin Ong synthesizes mythologies, histories and the anecdotal into non-linear narratives and surreal improvisations...</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#banner-slider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner-slider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>
    
    </div>
);
};
export default Banner;