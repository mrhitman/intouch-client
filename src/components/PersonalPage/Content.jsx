import React, { Component } from "react";
import LeftMenu from "../common/LeftMenu";
import Middle from "./Middle";
import Profile from "./Profile";
import Wall from "./Wall";
import Photos from "./Photos";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <LeftMenu />
        <Middle />
        <Profile />
        <Photos />
        <Wall />
      </div>
    );
  }
}

export default Content;
