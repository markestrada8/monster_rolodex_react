import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, placeholder, searchParameter, onChangeHandler } =
      this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          value={searchParameter}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
