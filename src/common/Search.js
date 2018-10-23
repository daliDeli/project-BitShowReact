import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getSeriesByName } from "../services/dataService";

export default class Search extends Component{
    constructor(){
        super();

        this.state={
            seriesData: {
                data: [{
                    show: {}
                }]
            },
            searchString: "",
        }
    }

    searchedString = event => {
        const searchString = event.target.value;

        this.setState({
            searchString
        })

        getSeriesByName(
            searchString,
            seriesData => { this.setState({ seriesData }); },
            error => {
                console.warn(error);
            }
        );
    }

    emptySearchedString = () => {
        this.setState({
            searchString: ""
        })
    }

    render(){
        return(
            <div>
                <input 
                className="form-control mr-sm-2 " 
                onChange={this.searchedString} 
                value={this.state.searchString} 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                />
                { this.state.searchString && 
                <ul className="list-group">
                    {this.state.seriesData.data.map((series,i) =>
                            <li className="list-group-item " key={i} onClick={this.emptySearchedString}>
                                <Link to={`/single/${series.show.id}`}>
                                    {series.show.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>}
            </div>
        )
    }
}