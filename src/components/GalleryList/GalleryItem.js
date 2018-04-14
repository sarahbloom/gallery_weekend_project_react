import React, {Component} from 'react';
import "./GalleryItem.css";
import Button from 'material-ui/Button';
import {Favorite} from 'material-ui-icons';

// let likes = 0;

class GalleryItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            photoVisible: true,
            likes: 0
        }//end this.state
        
    }//end constructor

    //METHODS WILL GO HERE (toggle, show pic, show text)
    hideShow = () => {
        console.log('clicked item')
        this.setState({
            photoVisible: !this.state.photoVisible
        })   
    }


    likedPhoto = () =>{
        console.log('clicked like');
        this.setState({
            likes: this.state.likes + 1
        })
        console.log(this.state.likes);
    }

    render(){
       let imagePath = `${this.props.image.path}`;
       let imageDescription =`${this.props.image.description}`;
        let displayItem;
        let likesText = this.state.likes + ' people liked this!';
        console.log(likesText);
        
        if (this.state.photoVisible){
            displayItem = (<div className="itemBox">
                <img className="photoDisplay" onClick={this.hideShow} src={imagePath} alt="description" />
                <br/>
                <Button variant="fab" size="small" color="secondary" onClick={this.likedPhoto}><Favorite /></Button> 
                <p>{likesText}</p>
            </div>)
        } else {
            displayItem = (<div className="itemBox">
                <p onClick={this.hideShow}> {imageDescription}</p>
                <br />
                <Button variant="fab" size="small" color="secondary" onClick={this.likedPhoto}><Favorite /></Button> 
                <p>{likesText}</p>
            </div>)
        }

        return displayItem;
    }//end render

}// end class


export default GalleryItem