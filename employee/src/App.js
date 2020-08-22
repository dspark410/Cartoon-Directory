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
    friends,
    filter:""
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

  sortEmployees = (friends) => {
    const newFriends = [...friends];
    newFriends
      .sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({friends: newFriends});
  };

  sortReverseEmployees = (friends) => {
    const newFriends = [...friends];
    newFriends
      .sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({friends: newFriends});
  };

  handleOnChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    if(!value){
      this.setState({friends})
    }
  };
  filterEmployees = (event) => {
    event.preventDefault();
    if(!this.state.filter){
      return
    }
    const employees = friends.filter(
      (friend) => friend.name.toLowerCase() === this.state.filter.toLowerCase()
    );
    //console.log("employeessssss???", employees);
    this.setState({ friends: employees });
  };





  render() {
    return (
      <Wrapper>
        <Title>Employee Management Tracker</Title>
        <SearchForm
          handleOnChange={this.handleOnChange} filter={this.state.filter} filterEmployees={this.filterEmployees}
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
