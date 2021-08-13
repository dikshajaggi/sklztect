import React from "react";
import REGISTER from "../REGISTER";
import LOGIN from "../LOGIN";
import "./LandingHeader.css";

function LandingHeader(props) {
  const { overlapGroup } = props;

  return (
    <div className="landing-header">
      <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="sklz-tect valign-text-middle">SklzTect</div>
        <div className="group-19">
          <div className="overlap-group4">
            <div class="dropdown">
             <div className="subjects valign-text-middle rubik-normal-black-20px">Subjects</div>
                <div className ="dropdown-content"> 
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Engineering</a></div> 
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Media</a></div> 
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Electronics</a></div>  
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Administration</a></div> 
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Technology Sales</a></div>  
                  <div className ="dropdown-item rubik-normal-black-20px"><a href="#">Publishing & Art</a></div> 
               </div>
            </div>
          </div>
        </div>
        <div className="community valign-text-middle rubik-normal-black-20px">Community</div>
        <div className="about-us-1 valign-text-middle rubik-normal-black-20px">About us</div>
        <REGISTER />
        <LOGIN />
      </div>
    </div>
  );
}

export default LandingHeader;
