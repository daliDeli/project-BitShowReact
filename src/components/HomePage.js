import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getAllSeries } from "../services/dataService";
import { ShowCard } from "./ShowCard";

export default class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            series: []
        }
    }

    getSeries() {
        getAllSeries(
            series => {
                this.setState({ series });
            }, 
            error => {
                console.log(error);
            }
        );
    }
    
    componentDidMount() {
        this.getSeries();
    }

    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row">

                        {this.state.series.map(series =>
                            <Link to={`/single/${series.id}`} className="col-12 col-md-4 col-lg-3 text-center top-buffer" key={series.id}>
                                <ShowCard image={series.image.medium} name={series.name} key={series.id} />
                            </Link>
                        )}
                    </div>
                </div>
            </main>
        );
    }
}