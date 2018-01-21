import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DataService from "../services/DataService";
import ShowCard from "./ShowCard";
import "./HomePage.css";


export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            series: []
        }

        this.dataService = new DataService();

        this.getSeries = this.getSeries.bind(this);
        this.successSeriesHandler = this.successSeriesHandler.bind(this);

    }

    getSeries() {
        this.dataService.getAllSeries(this.successSeriesHandler, this.failedRequest);
    }

    successSeriesHandler(series) {
        this.setState({
            series
        })
    }
    
    componentDidMount() {
        this.getSeries();
    }
    
    failedRequest(error) {
        
        console.log(error)
    }

    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row">

                        {this.state.series.map(series =>
                            <Link to={`/single/${series.id}`} className="col-12 col-md-6 col-lg-4 text-center top-buffer" key={series.id}>
                                <ShowCard image={series.image.medium} name={series.name} key={series.id} />
                            </Link>
                        )}
                    </div>
                </div>
            </main>
        );
    }
}