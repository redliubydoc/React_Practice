import { PermMedia as PermMediaIcon } from "@mui/icons-material";
import { LocalOffer as LocalOfferIcon } from "@mui/icons-material";
import { Room as RoomIcon } from "@mui/icons-material";
import { EmojiEmotions as EmojiEmotionsIcon } from "@mui/icons-material";

import "./PostForm.css";


function PostForm() {
  return (
    <div className="cpost-form">
      <div className="container-form">
        <div className="form-header">
          <img className="header-img" src="/assets/person/4.jpeg" alt=""/>
          <input className="header-inp" placeholder="What's in your mind Raj?"/>
        </div>
        <hr className="form-separator"/>
        <div className="form-footer">
          <div className="share-actions">
            <div className="share-action">
              <PermMediaIcon className="action-icon" htmlColor="tomato"/>
              <span className="action-label">Photo or video</span>
            </div>
            <div className="share-action">
              <LocalOfferIcon className="action-icon" htmlColor="blue"/>
              <span className="action-label">Tag</span>
            </div>
            <div className="share-action">
              <RoomIcon className="action-icon" htmlColor="green"/>
              <span className="action-label">Location</span>
            </div>
            <div className="share-action">
              <EmojiEmotionsIcon className="action-icon" htmlColor="goldenrod"/>
              <span className="action-label">Feelings</span>
            </div>
          </div>
          <div className="wrapper-share-button">
            <button className="share-button">Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm;