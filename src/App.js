import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("httsp://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <input
          type="search"
          placeholder="search monsters"
          onChange={e =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            )
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
