import newsIcon from "../../image/news-icon.svg";

import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navIconWrapper">
        <img className="navIcon" src={newsIcon} alt="navbar icon" />
        <h1 className="navTitle">NEWS</h1>
      </div>
    </nav>
  );
};

export default Navbar;
