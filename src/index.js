//Please go and get React from my installed modules
import React, {Component} from 'react';
//React and ReactDOM are different
import ReactDOM from 'react-dom'; //specifically or react dom

//Get the search bar
import SearchBar from './components/search_bar'; //no need for file extension

import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';
//declare the API key baby
const API_KEY = 'AIzaSyDJW327CCMIucWyme1WFhmou36HefakrXg';




//when you write react code you write individual snippetes or code
//or componenets
//Write javascript that will produce html
//Transpile from es6 to something else to html

//Weback and babel transpile es6 to html
//JSX + ES6 -> ES5
//--> spits out application.js file

//Create new component. This component should produce some HTML.
class App extends Component{ //-> This creates an instance, but App is a class
	constructor(props){
		super(props);
		this.state = { videos : [] }
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//this.setState({videos: videos});
			this.setState({videos}); //same as above
		});
	}
	render() {
		
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} /> 
			</div> //this is jsx (subset of js) -> transpiled to vanilla js
		);
	}

} //This stuff gets rendered


//Make sure that this component gets put into the DOM
//Take the generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); //when we create a component we create a type of component (class  not and instance)
//second thing is a target dom thing
//what is this createElement nonsense

//WHAT IS BUNDLE.JS?