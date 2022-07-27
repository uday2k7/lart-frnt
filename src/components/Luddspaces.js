import React from "react";

const Luddspaces=()=>{
return(
    <div className="container">
      <div className="luddspace-main-block">
        <div className="filter_block">
          <div className="filter_header">
            <h2 className="header-text">LuddSpace</h2>
          </div>
          <div className="filter_right-block">
            <div className="sortby">
              <label className="sortby-titel">Show </label>
              <select
                className="browser-default custom-select sortby-select"
              >
                <option value="">Everything</option>
                <option value="1">Featured artwork</option>
                <option value="2">Today's post</option>
                <option value="3">Featured artist</option>
                <option value="4">Stories</option>
                <option value="5">Tips & advice</option>
                <option value="12">Interview</option>
                <option value="13">Doing good</option>
              </select>
            </div>
          </div>
        </div>
        <div className="luddspace-main_block">
          <ul className="luddspace_list">
            

            {/* <div className="load-more">LOAD MORE...</div> */}
          </ul>
        </div>
      </div>
    </div>
		
);
};
export default Luddspaces;