import React, { Component } from 'react';
import "./Navbar.css"

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef(); 
		this.state = {
			searchValue: "" 
		};
	}

	handleInputChange = () => {
		this.setState({
			searchValue: this.inputRef.current.value
		});
	};

	render() {
		return (
			<div className="">
				<form>
					<input
						ref={this.inputRef} 
						onChange={this.handleInputChange} 
						type="text"
						placeholder="Enter to search"
						className="form-control"
					/>
				</form>
				<div>{this.state.searchValue}</div> {}
			</div>
		);
	}
}
