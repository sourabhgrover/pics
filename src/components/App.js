import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

// const App = () =>{
//     return <div className="ui container" style={{marginTop:'10px'}}><SearchBar /></div>;
// };

class App extends React.Component{
    state  = {images : [] };
     afterSearchSubmit = async (term) =>{
     const response =    await unsplash.get('/search/photos',{
        params:{
            query : term
        }
     });
        // console.log(response);
        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.afterSearchSubmit}/>
                Found : {this.state.images.length} images
            </div>
            );
    }
}


export default App;
