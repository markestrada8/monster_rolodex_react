import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { displayMonsters } = props;
  const monsters = displayMonsters.map((monster) => {
    return <Card key={monster.id} monster={monster} />;
  });
  return <div className="card-list">{monsters}</div>;
};

export default CardList;
