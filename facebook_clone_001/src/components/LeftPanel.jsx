import { useState } from "react";

import { RssFeed as RssFeedIcon } from "@mui/icons-material";
import { Chat as ChatIcon } from "@mui/icons-material";
import { VideoCall as VideoCallIcon } from "@mui/icons-material";
import { Groups as GroupsIcon } from "@mui/icons-material";
import { Bookmark as BookmarkIcon } from "@mui/icons-material";
import { HelpCenter as HelpCenterIcon } from "@mui/icons-material";
import { Work as WorkIcon } from "@mui/icons-material";
import { Event as EventIcon } from "@mui/icons-material";
import { Store as StoreIcon } from "@mui/icons-material";

import { users } from "../mock_data";

import "./LeftPanel.css";


function LeftPanel() {

  const [ friends, setFriends ] = useState(users);

  return (
    <div className="clpanel">
      <nav className="lpanel">
        <ul className="lpanel-nav">
          <li className="nav-item">
            <RssFeedIcon className="nav-icon"/>
            <span className="nav-label">Feed</span></li>
          <li className="nav-item">
            <ChatIcon className="nav-icon"/>
            <span className="nav-label">Chats</span></li>
          <li className="nav-item">
            <VideoCallIcon className="nav-icon"/>
            <span className="nav-label">Videos</span></li>
          <li className="nav-item">
            <GroupsIcon className="nav-icon"/>
            <span className="nav-label">Groups</span></li>
          <li className="nav-item">
            <EventIcon className="nav-icon"/>
            <span className="nav-label">Events</span></li>
          <li className="nav-item">
            <StoreIcon className="nav-icon"/>
            <span className="nav-label">Shop</span></li>
          <li className="nav-item">
            <BookmarkIcon className="nav-icon"/>
            <span className="nav-label">Bookmarks</span></li>
          <li className="nav-item">
            <HelpCenterIcon className="nav-icon"/>
            <span className="nav-label">Questions</span></li>
          <li className="nav-item">
            <WorkIcon className="nav-icon"/>
            <span className="nav-label">Jobs</span></li>
        </ul>
        <hr className="lpanel-seperator"/>
        <ul className="lpanel-friends">
          {
            friends.map((friend) => 
              <li key={friend.id} className="nav-item">
                <div className="container-friend">
                  <img className="friend-dp" src={friend.profilePicture} alt=""/>
                  <span className="friend-name">{friend.username}</span>
                </div>
              </li>  
            )
          }
        </ul>
      </nav>
    </div>
  );
}

export default LeftPanel;
