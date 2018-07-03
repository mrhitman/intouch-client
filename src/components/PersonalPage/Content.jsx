import React, { Component } from "react";
import LeftMenu from "../common/LeftMenu";
import Middle from "./Middle";
import Profile from "./Profile";
import Wall from "./Wall";
import Photos from "./Photos";
import "../../styles/middle.css";
import "../../styles/rightPart.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <LeftMenu />
        <Middle />
        <div className="rightPart">
          <Profile />
          <Photos />
          <Wall />
        </div>
      </div>
    );
  }
}

export default Content;
