import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";
import { Reply as ReplyIcon } from "@mui/icons-material";
import { Link as LinkIcon } from "@mui/icons-material";
import { ReportProblem as ReportProblemIcon } from "@mui/icons-material";
import { VisibilityOff as VisibilityOffIcon } from "@mui/icons-material";
import { Facebook as FacebookIcon } from "@mui/icons-material";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { Twitter as TwitterIcon } from "@mui/icons-material";

import { users as mockUsers} from "../mock_data";

import "./Post.css";


function Post({ post }) {

  let user;

  for (let mockUser of mockUsers) {
    if (mockUser.id === post.userId) {
      user = mockUser;
      break;
    }
  }

  return (
    <div className="cpost">
      <div className="container-post">
        <div className="post-header">
          <div className="post-userimg">
            <img src={user.profilePicture} alt=""/>
          </div>
          <div className="post-info">
            <div className="post-username">
              <span>{user.username}</span>
            </div>
            <div className="post-time">
              <sub>{post.date}</sub>
            </div>
          </div>
          <div className="post-menu">
            <div className="dropdown-trigger main">
              <MoreHorizIcon/>
            </div>
            <ul className="dropdown-menu main">
              <li className="dropdown-item">
                <VisibilityOffIcon className="item-icon"/>
                <span>Hide</span>
              </li>
              <li className="dropdown-item">
                <ReportProblemIcon className="item-icon"/>
                <span>Report</span>
              </li>
              <li className="dropdown-item share">
                <ReplyIcon className="item-icon"/>
                <span>Share</span>
                <ul className="dropdown-menu share">
                  <li className="dropdown-item">
                    <FacebookIcon className="item-icon" htmlColor="#0165E1"/>
                    <span>Facebook</span>
                  </li>
                  <li className="dropdown-item">
                    <WhatsAppIcon className="item-icon" htmlColor="#128C7E"/>
                    <span>Whatsapp</span>
                  </li>
                  <li className="dropdown-item">
                    <InstagramIcon className="item-icon" htmlColor="#E1306C"/>
                    <span>Instagram</span>
                  </li>
                  <li className="dropdown-item">
                    <TwitterIcon className="item-icon" htmlColor="#1DA1F2"/>
                    <span>Twitter</span>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
                <LinkIcon className="item-icon"/>
                <span>Get Link</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="post-main">
          <div className="content-text">
            <p>{post.desc}</p>
          </div>
          <div className="content-image">
            <img src={post.photo} alt=""/>
          </div>
        </div>
        <div className="post-footer">
          <div className="post-actions">
            <div className="post-action">
              <img src="/assets/like.png" alt=""/>
            </div>
            <div className="post-action">
              <img src="/assets/heart.png" alt=""/>
            </div>
            <div className="post-action">
              <img src="/assets/love.png" alt=""/>
            </div>
            <div className="post-action">
              <img src="/assets/haha.png" alt=""/>
            </div>
          </div>
          <div className="post-counts">
            <div className="like-count">
              <a href="#">{`${post.like} likes`}</a>
            </div>
            <div className="comment-count">
              <a href="#">{`${post.comment} comments`}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;