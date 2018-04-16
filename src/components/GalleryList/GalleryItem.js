import React, {Component} from 'react';
import axios from 'axios';
import "./GalleryItem.css";
import Button from 'material-ui/Button';
import {Favorite} from 'material-ui-icons';



class GalleryItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            photoVisible: true,
        }//end this.state
    }//end constructor

    //METHODS WILL GO HERE (toggle, show pic, show text)
    hideShow = () => {
        console.log('clicked item')
        this.setState({
            photoVisible: !this.state.photoVisible
        })   
    }//end hideShow


    likedPhoto = (image) => {
        axios.put(`/gallery/like/${this.props.image.id}`)
        .then((response)=>{
            // console.log('clicked photo PUT', this.props.image.likes);
            this.props.getPhotos();
        }).catch((err)=>{
            console.log('error in PUT', err);
        })//end .catch
    }//end PUT liked photo

    render(){
       let imagePath = `${this.props.image.path}`;
       let imageDescription =`${this.props.image.description}`;
       let displayItem;

        if (this.state.photoVisible){
            displayItem = (
                <div className="itemBox">
                <img className="photoDisplay" onClick={this.hideShow} src={imagePath} alt="description" />
                <br/>
                <Button variant="fab" size="small" color="secondary" onClick={this.likedPhoto}><Favorite /></Button> 
                <p><span>{this.props.image.likes} people liked this!</span></p>
            </div>)
        } else {
            displayItem = (
                
                <div className="itemBox">
                    <div className="textDisplay" onClick={this.hideShow}> 
                        {imageDescription}
                    </div>
                <br />
                <Button variant="fab" size="small" color="secondary" 
                        onClick={this.likedPhoto}><Favorite />
                    </Button> 
                <p>{this.props.image.likes} people liked this!</p>
                </div>)
        }
        return displayItem
    
    }//end render

}// end class


export default GalleryItem