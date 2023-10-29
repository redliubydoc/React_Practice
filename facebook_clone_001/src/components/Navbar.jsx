import { Search as SearchIcon } from "@mui/icons-material";
import { Group as GroupIcon } from "@mui/icons-material";
import { Chat as ChatIcon } from "@mui/icons-material";
import { Public as PublicIcon } from "@mui/icons-material";
import { Home as HomeIcon } from "@mui/icons-material";
import { Settings as SettingsIcon} from "@mui/icons-material";
import { ExitToApp as ExitToAppIcon} from "@mui/icons-material";
import { AccountCircle as  AccountCircleIcon} from "@mui/icons-material";

import "./Navbar.css";


function Navbar({ className }) {
  return (
    <div className="cnavbar">
      <nav className={`navbar ${className}`}>
        <span className="navbar-brand">fakebook</span>
        <div className="navbar-search">
          <SearchIcon className="search-action"/>
          <input className="search-input" type="search" placeholder="search..."/>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item search"><SearchIcon className="nav-icon"/>
          </li>
          <li className="nav-item"><HomeIcon className="nav-icon"/>
          </li>
          <li className="nav-item"><ChatIcon className="nav-icon"/>
            <span className="nav-item-badge">3</span>
          </li>
          <li className="nav-item"><GroupIcon className="nav-icon"/>
            <span className="nav-item-badge">5</span>
          </li>
          <li className="nav-item"><PublicIcon className="nav-icon"/>
            <span className="nav-item-badge">3</span>
          </li>
          <li className="nav-item dropdown">
            <img className="dp-small" src="/assets/person/4.jpeg" alt="dp"/>
            <ul className="dropdown-menu">
              <li className="dropdown-item"> 
                <AccountCircleIcon className="item-icon"/>
                <span className="item-text">Account</span>
              </li>
              <li className="dropdown-item"> 
                <SettingsIcon className="item-icon"/>
                <span className="item-text">Settings</span>
              </li>
              <li className="dropdown-item dropdown-separator"></li>
              <li className="dropdown-item logout"> 
                <ExitToAppIcon className="item-icon"/>
                <span className="item-text">Logout</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
