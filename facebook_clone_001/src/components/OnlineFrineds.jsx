import "./OnlineFriends.css"

function OnlineFriends({ onlineFriends }) {

  return (
    <div className="conline-friends">
      <div className="container-online-friends">
        <h3 className="online-friends-title">Online Friends</h3>
        <ul className="online-friends-list">
          {
            onlineFriends.map((elem, indx) => 
              <li key={indx} className="online-friend">
                <div className="friend-dp">
                  <img src={elem.dp} alt=""/>
                  <span className="status-badge"></span>
                </div>
                <div className="friend-name">{elem.username}</div>
              </li>  
            )
          }
        </ul>
      </div>
    </div>
  );
} 

export default OnlineFriends