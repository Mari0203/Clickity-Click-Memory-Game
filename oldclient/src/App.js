import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };

  resetClicked = () => {
    const newArray = this.state.friends.map(friend => {
      friend.clicked = false;
      return friend;
    });
    this.setState({
      friends: newArray
    });
  };

  removeFriend = id => {
    console.log("id: ", id);

    const newArray = this.state.friends.map(friend => {
      if (id === friend.id) {
        // Executes below ONLY if friend.clicked is TRUE (i.e. it exists!):
        if (friend.clicked) {
          this.setState({
            currentScore: 0
          });
          this.resetClicked();

        // Executes below else function if friend.clicked is FALSE (i.e. it DOES NOT exists!)
        } else {

          if (this.state.currentScore >= this.state.highScore) {
            this.setState({
            // Update the scores by an increment of 1
              currentScore: this.state.currentScore + 1,
              highScore: this.state.highScore + 1
            });
          } 
          else {
            this.setState({
              currentScore: this.state.currentScore +1
            });
          }
        };

        // If the clicked-friend(image) doesn't exist...:
        if (!friend.clicked) {
          friend.clicked = true;
        }
      }

      return friend;

    });

    console.log(friends);

    // Set this.state.friends equal to the new friends array
    this.setState({ friends: newArray });

    const newShuffledArray = this.state.friends.sort( () => Math.random() - .5);
    
    this.setState({
      friends: newShuffledArray
    });
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>

        Your Current Score: {this.state.currentScore} Your Best Score: {this.state.highScore} 

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
