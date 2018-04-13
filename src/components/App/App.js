import React, { Component } from 'react';
import axios from 'axios';
import 'typeface-roboto';
import './App.css';

class App extends Component {

  getPhotos(){
    axios.get('/gallery').then((response)=>{
      console.log('GET /gallery success', response);
      //this.setstate
    }).catch((err)=>{
      console.log('error GET /gallery', err);
    })
  }

  componentDidMount(){
    console.log('mounted')
    this.getPhotos()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
