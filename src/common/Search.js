import React, {Component} from "react";

import DataService from "../services/DataService";

export default class Search extends Component{
    constructor(){
        super();

        this.state={
            searchString:"",
            
        }
        this.dataService = new DataService();

        this.searchedString = this.searchedString.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    searchedString(event){
        const searchString = event.target.value;

        this.setState({
            searchString
        })

        this.dataService.getSeriesByName(searchString, this.successHandler, this.errorHandler);

        this.props.passingSearchedString(this.state.searchString);
    }

    successHandler(seriesData){   
            this.props.passingSeriesData(seriesData);

    }
    
    errorHandler(error){
        console.warn(error);
    }

    render(){
        return(
            
            <input className="form-control mr-sm-2 " onChange={this.searchedString} value={this.state.searchString} type="search" placeholder="Search" aria-label="Search"/>
        )
    }
}