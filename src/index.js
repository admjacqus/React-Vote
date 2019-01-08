import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import async from 'async';
// import mysql from 'mysql';
// var mysql = require('mysql');


// const connection = mysql.createConnection({
//     host: "studentpoll.database.windows.net",
//     user: "ajacques",
//     password: "Legolas01!",
//     database: "studentPollDatabase"
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });


const list = [
{ CityID: 1, CityName: 'Liverpool', Votes: 2 },
{ CityID: 2, CityName: 'Leeds', Votes: 0 },
{ CityID: 3, CityName: 'Nottingham', Votes: 0 },
{ CityID: 4, CityName: 'Birmingham', Votes: 0 },
{ CityID: 5, CityName: 'Manchester', Votes: 0 },
{ CityID: 6, CityName: 'Newcastle', Votes: 0 },
{ CityID: 7, CityName: 'Sheffield', Votes: 0 } ];

class App extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.CityID === memberId) {
        return Object.assign({}, member, {
          Votes: member.Votes + 1
        });
      } else {
        return member;
      }
    });
  
    this.setState({
      members: updatedList
    });
  };

  render() {
    return this.state.members.map(member => (

      <Beatle key={member.CityID} id={member.CityID} name={member.CityName} votes={member.Votes} onVote={this.handleEvent} />
    ));
  }
}

class Beatle extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="App">
        {this.props.name} <button onClick={this.handleClick}>+</button> {this.props.votes}
      </div>
    );
  }
}

export default App;

  // ========================================
  

  ReactDOM.render(<App />, document.getElementById('root'));

