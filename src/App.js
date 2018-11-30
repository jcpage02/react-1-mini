import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture (value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(value){
    let friendsCopy = [...this.state.friends]
    friendsCopy.push({name: this.state.name, picture: this.state.picture})
    this.setState({
        friends: friendsCopy,
        picture: '',
        name: ''
    })
  }

  render() {
    let {friends} = this.state
    let displayFriends = friends.map((friend, i)=>{
      console.log(friend, i)
      return <div key={i}>
        <img src={friend.picture} alt= ''/>
        <span>{friend.name}</span>
      </div>
    })
    return (    
      <div>
        <label>Picture:</label>
        <input onChange={(e) => this.updatePicture(e.target.value)}
        value = {this.state.picture}/>
        <label>Name:</label>
        <input onChange={(e) => this.updateName(e.target.value)}
        value = {this.state.name}/>
        <button onClick={(e) => this.addFriend(e.target.value)}>
          Add Friend</button>
        {displayFriends}
      </div>
    );
  }
}

export default App;
