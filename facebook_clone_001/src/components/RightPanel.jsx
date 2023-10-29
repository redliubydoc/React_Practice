import { useState } from "react";
import OnlineFriends from "./OnlineFrineds";

import { onlineFriends as mockOnlineFriends } from "../mock_data";

import "./RightPanel.css";


function RightPanel() {
  
  const [ onlineFriends, setOnlineFriends ] = useState(mockOnlineFriends);

  return (
    <div className="crpanel">
      <div className="rpanel">
        <div className="birthday-alert">
          <img className="alert-icon" src="/assets/gift.png" alt=""/>
          <span className="alert-message">
            <b>Pola Foster</b> and <b> 3 other friends </b> have birthday today
          </span>
        </div>
        <div className="container-ad">
          <img className="ad-image" src="/assets/ad_2.png" alt=""/>
        </div>
        <OnlineFriends onlineFriends={onlineFriends}></OnlineFriends>
      </div>
    </div>
  );
}

export default RightPanel;
