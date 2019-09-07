import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    curretScore: 0,
    highScore: 0
  };

  resetClicked = () => {
    const newFriends = this.state.firneds.map(friend => {
      friend.clicked = false;
      return friend;
    });
    this.setState({
      friends: newFriends
    });
  };

  removeFriend = id => {
    console.log("id: ", id);

    const friends = this.state.friends.map(friend => {
      if (id === friend.id) {
        // Executes below ONLY if friend.clicked is TRUE (i.e. it exists!):
        if (friend.clicked) {
          this.setState({
            currentScore: 0
          });

          // Executes below else function if friend.clicked is FALSE (i.e. it DOES NOT exists!)
        } else {
          this.setState({
            // Update the scores by an increment of 1
            currentScore: this.state.currentScore + 1,
            highScore: this.state.highScore + 1
          });
        }

        // If the clicked-friend(image) doesn't exist...:
        if (!friend.clicked) {
          friend.clicked = true;
        }
      }

      return friend;
    });

    console.log(friends);

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
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
