import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// props.children refer to Wrapper's children which are Title and FriendCard plus whatever is inside of <Wrapper> tag.

export default Wrapper;
