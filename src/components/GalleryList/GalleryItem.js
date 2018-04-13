import React, {Component} from 'react';
import "./GalleryItem.css";
import Button from 'material-ui/Button';
import {Favorite} from 'material-ui-icons';


class GalleryItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            photoVisible: true
        }//end this.state

    }//end constructor

    //METHODS WILL GO HERE (toggle, show pic, show text)
    hideShow = () => {
        console.log('clicked item')
        this.setState({
            photoVisible: !this.state.photoVisible
        })   
    }

    render(){
       let imagePath = `${this.props.image.path}`;
       let imageDescription =`${this.props.image.description}`;
        let displayItem;
        if (this.state.photoVisible){
            displayItem = (<div>
                <img className="photoDisplay" onClick={this.hideShow} src={imagePath} alt="description" />
                <br/>
                <Button variant="fab" size="small" color="secondary"><Favorite/></Button>
            </div>)
        } else {
            displayItem = (<div>
                <p onClick={this.hideShow}> {imageDescription}</p>
                <br />
                <Button variant="fab" size="small" color="secondary"><Favorite /></Button>
            </div>)
        }

        return displayItem;
    }//end render

}// end class


export default GalleryItem