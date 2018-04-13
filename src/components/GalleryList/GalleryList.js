import React, { Component } from 'react';
import GalleryItem from './GalleryItem.js'

class GalleryList extends Component{
    //handleClick(){
    // }

    render(){
        console.log(this.props.photoArray);

        let images = this.props.photoArray.map( image => {          
            return(
                // console.log('GalleryList', this.props.photoArray),
                < GalleryItem
                key = {image.id}
                image = {image} />
            ) 
        })// end .map   
 

        return(  images )
    }//end render

}//end class

export default GalleryList