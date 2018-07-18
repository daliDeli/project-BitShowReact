import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from "./Search";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seriesData: {
                data: [{
                    show: {}
                }]
            },
            display: "none"
        }

        this.passingSeriesData = this.passingSeriesData.bind(this);
        this.searchVisibilityOnOff = this.searchVisibilityOnOff.bind(this);
        this.toggleStateDisplay = this.toggleStateDisplay.bind(this);
    }

    passingSeriesData(seriesData) {
        this.setState({
            seriesData
        })
    }

    searchVisibilityOnOff(searchedString) {
        if (searchedString) {
            this.setState({
                display: "block"
            })
        }
    }

    toggleStateDisplay() {
        this.setState({
            display: "none"
        })
    }

    componentDidMount() {
        this.searchVisibilityOnOff();
    }

    render() {
        return (
            <header className="container-fluid">
                <nav className="row navbar navbar-dark justify-content-between">
                   
                    <Link to="/" className="navbar-brand col-3 col-md-4" id="bitshow"><h2>BitShow</h2></Link>
                
                    <form className="form-inline col-4 col-md-4 ">
                        <Search passingSeriesData={this.passingSeriesData} passingSearchedString={this.searchVisibilityOnOff} />

                    </form>
               
                </nav>
                <ul className="list-group container-fluid" style={{ display: this.state.display, position: "absolute", top: 67, zIndex: 2 }}>
                    {this.state.seriesData.data.map((series,i) =>
                        <li className="list-group-item " key={i} onClick={this.toggleStateDisplay}>
                            <Link to={`/single/${series.show.id}`}> {series.show.name} </Link>
                        </li>)}
                </ul>
            </header>
        );
    }
}