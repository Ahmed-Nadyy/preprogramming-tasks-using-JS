import React from "react";
import "./Navbar.css";
import Products from "../Products/Products";

export default class Navbar extends React.Component {
    
    state = {
        naValue: "all",
        searchQuery: "",
    }

    all = () => {
        this.setState({
            naValue: "all"
        });
    }

    Nike = () => {
        this.setState({
            naValue: "Nike"
        });
    }
    Adidas = () => {
        this.setState({
            naValue: "Adidas"
        });
    }
    Saucony = () => {
        this.setState({
            naValue: "Saucony"
        });
    }
    Vans = () => {
        this.setState({
            naValue: "Vans"
        });
    }

    handleSearchInputChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" onClick={this.all}>All</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={this.Nike}>Nike</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={this.Adidas}>Adidas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={this.Saucony}>Saucony</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={this.Vans}>Vans</a>
                                </li> 
                            </ul>
                            <form className="d-flex" role="search">
                                <input 
                                    
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search"
                                    onChange={this.handleSearchInputChange} 
                                />
                                {/* {console.log(this.state.searchQuery)} */}
                            </form>
                        </div>
                    </div>
                </nav>
                <Products naValue={this.state.naValue} searchQuery = {this.state.searchQuery}/>
            </>
        );
    }
}
