import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
let counter=0;
let highScore=0;

class App extends Component {
  state = {
    friends
  };

  reset = () => {
    this.setState({friends});
  }
  
  shuffle= arra1 => {
    var ctr = arra1.length, temp, index;
      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  };

  shuffle1 = () => {
    const friends = this.shuffle(this.state.friends);
    this.setState({ friends });
  };

  clickedCard = (id) => {
    this.shuffle1();
    let changeid = id;
    let friends1 = JSON.parse(JSON.stringify(this.state.friends));
     for (var i = 0; i<friends1.length; i++)
     {
       if (friends1[i].id === changeid)
      {
       friends1[i].clicked++;
       counter++;
      }
     }
      this.setState({friends:friends1});

      for(var x = 0; x<friends1.length; x++)
      {
        if(friends1[x].clicked>1)
        {
          alert ("Game Over! You have already clicked this card(image) before, please try again")
            if(counter>highScore)
            {
              highScore = counter-1;
            }
          counter = 0;
          this.reset();
        }
    }

     if(counter===friends1.length)
       {
        alert ("Congratulations, you win!");
        highScore = counter;
        counter = 0;
        this.reset();
        }
};

  render() {
    return (
      <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal"><strong>Memory Game</strong>(Please scroll all the way to the bottom of this page for instructions on how to play this game)</h5>
             <nav className="my-2 my-md-0 mr-md-3">
              <div className="p-2 text-dark" >Current Score: {counter}</div>
              <div className="p-2 text-dark" >Highest Score: {highScore}</div>
             </nav>
           </div>

        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              clickedCard={this.clickedCard}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
             />
          ))}
        
        </Wrapper>
      
        <footer className="footer mt-auto py-3">
          <div className="container">
            <span className="text-muted">Current Score: {counter} | Highest Score: {highScore} <hr/><ul><li>Please click on the cards(images above)</li><li>Make sure to remember the card you clicked and don't click the same card again as the order will be reversed with every click</li><li>You win once you click all the cards not selected before</li></ul></span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
