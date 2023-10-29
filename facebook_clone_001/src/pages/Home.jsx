import LeftPanel from "../components/LeftPanel";
import Navbar from "../components/Navbar";
import RightPanel from "../components/RightPanel";
import Feed from "../components/Feed";


import "./Home.css";


function Home() {

  return (
    <div className="chome">
      <Navbar></Navbar>
      <div className="container-main">
        <LeftPanel></LeftPanel>
        <Feed></Feed>
        <RightPanel></RightPanel>
      </div>
    </div>
  );
}

export default Home;