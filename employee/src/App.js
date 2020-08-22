import React, {Component} from "react";
import Wrapper from "./components/Wrapper.js";
import SearchForm from "./components/SearchForm.js";
import EmployeeCard from "./components/EmployeeCard.js";
import Title from "./components/Title.js";
import Button from "./components/Button.js";
import Button2 from "./components/Button2.js";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends
  }

  handleButtonClick = event => {
    event.preventDefault()
    //console.log("reached btn click, ", this.state.friends)
    this.sortEmployees(this.state.friends)
  }

  handleButtonClickDSC = event => {
    event.preventDefault()
    //console.log("reached btn click, ", this.state.friends)
    this.sortReverseEmployees(this.state.friends)
  }

  sortEmployees = friends => {
    const newFriends = []
    friends.sort(function(a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
     })
     .map(friend => {
      console.log("friends???", friend)
      newFriends.push(friend)
      return friend
     })
     this.setState({newFriends})
     ;
  }

  sortReverseEmployees = friends => {
    const newFriends = []
    friends.sort(function(a, b) {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
     })
     .map(friend => {
      console.log("friends???", friend)
      newFriends.push(friend)
      return friend
     })
     this.setState({newFriends})
     ;
  }

  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;
  //   console.log("event", event.target)
  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // }


filterEmployees = (event) => {
  
  const employees = this.state.friends.filter(friend => friend.name.toLowerCase() === event.target.value.toLowerCase())
  console.log("employees", employees)
  
  this.setState({
    employees
  })
}


  render() {
    return (
      <Wrapper>
        <Title>Employee Management Tracker</Title>
        <SearchForm
          filterEmployees={this.filterEmployees}
        />
        <Button handleButtonClick={this.handleButtonClick}>Sort A-Z</Button>
        <Button2 handleButtonClickDSC={this.handleButtonClickDSC}>Sort Z-A</Button2>
        {this.state.friends.map(friend => (
          <EmployeeCard
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
