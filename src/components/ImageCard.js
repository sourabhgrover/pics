import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans:0} ;
    }

    componentDidMount(){
        // console.log( this.imageRef);
        // console.log( this.imageRef.current.clientHeight);
        // this.imageRef.current.addEventListner('load',this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef);
        // const height = this.imageRef.current.clientHeight;

        // const spans = Math.ceil(height/10);

        // this.setState ({spans : spans})
    }
    
    render(){
        const {description ,urls} = this.props.image;
        return <div><img ref={this.imageRef}  alt={description} src={urls.regular} ></img></div>;
    }
}

export default ImageCard;