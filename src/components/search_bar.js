//exporting modules
//classes
//state - apparently really confusing

//class component vs function component
//class has some internal state

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//class based component, always define render and return jsx
//same export
class SearchBar extends Component {
	constructor(props){ //auto called when instantiated
		super(props);

		//{} is an object -> how to manipulate state
		this.state = {term: ''}; //the properties that we want to record and monitor. We can give whatever names we want
	}
	//now we wanna know whenever the text in the input changes
	render() {
		// return <input onChange={(event) => console.log(event.target.value)}/>;

		return (
			<div>
				<input 
				value={this.state.term}
				onChange={(event) => this.setState({term: event.target.value})}/>
			</div>
		);
	}

	//on, name of element, name of the action
	// onInputChange(event){
	// 	console.log(event.target.value);
	// }
}

//State - is a js object used to record ad react to user events
//component auto renders when something changes




//Less functionality with the functional component
// const SearchBar = () => {
// 	return <input />; //React.createElement();
// };

//ReactDOM.render(<SearchBar />);

export default SearchBar; //when something tries to import this, this is what gets imported