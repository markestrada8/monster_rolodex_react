import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [searchParameter, setSearchParameter] = useState("");
  const [displayMonsters, setDisplayMonsters] = useState([]);
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    setSearchParameter(event.target.value);
    setDisplayMonsters(
      monsters.filter((monster) => {
        return monster.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((monsters) => {
        setMonsters([...monsters]);
        setDisplayMonsters([...monsters]);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className={"monster-search-box"}
        searchParameter={searchParameter}
        onChangeHandler={onSearchChange}
        placeholder={"Search Monsters"}
      />

      <br />

      <SearchBox
        className={"monster-search-box"}
        searchParameter={title}
        onChangeHandler={onTitleChange}
        placeholder={"title"}
      />
      <h1>{title}</h1>

      <CardList displayMonsters={displayMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       displayMonsters: [],
//       searchParameter: "",
//     };
//     // console.log("constructor");
//     this.onSearchChange = this.onSearchChange.bind(this);
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((monsters) => {
//         this.setState({
//           monsters: monsters,
//           displayMonsters: monsters,
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     this.setState({
//       searchParameter: event.target.value,
//       displayMonsters: this.state.monsters.filter((monster) => {
//         return monster.name
//           .toLowerCase()
//           .includes(event.target.value.toLowerCase());
//       }),
//     });
//   };

//   render() {
//     // console.log("render");
//     const { displayMonsters, searchParameter } = this.state;
//     const { onSearchChange } = this;

//     const monsters = displayMonsters.map((monster) => {
//       return <h1 key={monster.id}>{monster.name}</h1>;
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className={"monster-search-box"}
//           searchParameter={searchParameter}
//           onChangeHandler={onSearchChange}
//           placeholder={"Search Monsters"}
//         />

//         <CardList displayMonsters={displayMonsters} />
//       </div>
//     );
//   }
// }

export default App;
