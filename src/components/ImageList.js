import React from 'react';
import './ImageList.css';

const ImageList = (props) =>{
    // console.log(props.images);
    const images =  props.images.map(({description,id,urls}) =>{
        return <img key={id} alt={description} src={urls.regular} ></img>
    })
    return (

    <div className="image-list">{images}</div>
    );
}

export default ImageList;