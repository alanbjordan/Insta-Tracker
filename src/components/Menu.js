import React from "react";
import "../App.css";

function Menu() {
  return (
    <div class="ui menu">
      <div class="header item">Home</div>
      <a class="item">News</a>
      <a class="item">Trends</a>
      <a class="item">Things To Do</a>
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i class="search icon"></i>
        </div>
      </div>
      <div class="right item">
        <div class="ui action input">
          <input type="text" placeholder="Navigate to..." />
          <div class="ui button">Go</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
