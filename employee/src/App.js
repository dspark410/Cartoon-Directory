import React, {Component} from "react";
import Wrapper from "./components/Wrapper.js";
import SearchForm from "./components/SearchForm.js";
import EmployeeCard from "./components/EmployeeCard.js";
import Title from "./components/Title.js";
import Button from "./components/Button.js";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee Management Tracker</Title>
        <SearchForm
        
        />
        <Button>Sort Alphabetically</Button>
        {this.state.friends.map(friend => (
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
     
      </Wrapper>
    );
  } 
}

export default App;
