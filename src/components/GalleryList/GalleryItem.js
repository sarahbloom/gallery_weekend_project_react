import React, {Component} from 'react';

class GalleryItem extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         photoVisible: true
    //     }//end this.state

    // }//end constructor

    //METHODS WILL GO HERE (TOGGLE, show pic, show text)

    render(){
       let imagePath = `${this.props.image.path}`
        console.log('gallery item', this.props.photoArray)
        return <img src={imagePath} alt="description"/>
    }//end render

}// end class


export default GalleryItem