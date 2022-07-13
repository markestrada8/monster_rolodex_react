import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

export default class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("CardList render");
    const { displayMonsters } = this.props;
    const monsters = displayMonsters.map((monster) => {
      return <Card monster={monster} />;
    });
    return <div className="card-list">{monsters}</div>;
  }
}
