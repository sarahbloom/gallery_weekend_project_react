import React, { Component } from 'react';
import axios from 'axios';
import 'typeface-roboto';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js'

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        photoArray: []
      }
      //ANY BINDING WILL GO HERE
    // this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos = () => {
    axios.get('/gallery')
    .then((response)=>{
      console.log('GET /gallery success', response)
      this.setState({
        photoArray: response.data
      });
      console.log('photoArray GET', this.state.photoArray);
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
        <GalleryList photoArray = {this.state.photoArray}/>
      </div>
    );
  }
}

export default App;
