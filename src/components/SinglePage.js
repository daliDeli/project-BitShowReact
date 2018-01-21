import React, { Component } from 'react';
import DataService from "../services/DataService";

import "./SinglePage.css";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: null

        }
        this.dataService = new DataService();

        this.bindHandlers();
    }
    bindHandlers() {
        this.fetchOneSeries = this.fetchOneSeries.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.fetchSeriesThatIsSearched = this.fetchSeriesThatIsSearched.bind(this);

    }

    fetchOneSeries() {
        const seriesId = this.props.match.params.id;
        this.dataService.getOneSeries(seriesId, this.successHandler, this.errorHandler);

    }

    fetchSeriesThatIsSearched(seriesId) {
        this.dataService.getOneSeries(seriesId, this.successHandler, this.errorHandler);

    }

    errorHandler(error) {
        console.warn(error);
    }

    successHandler(series) {
        this.setState({
            series
        })
    }

    componentWillReceiveProps(nextProps) {
        this.fetchSeriesThatIsSearched(nextProps.match.params.id);
    }

    componentDidMount() {
        this.fetchOneSeries();
    }

    render() {

        if (this.state.series === null) {
            return (
                <p>Loading...</p>
            )
        }
        return (
            <main>
                <div className="container text-center">
                    <div className="row">
                        <h2 className="text-white col-12">
                            {this.state.series.name}
                        </h2>
                        <div className="col-12 showImageDiv">
                            <img id="single-show-image" src={this.state.series.imageOriginal} alt="Show cover" />
                        </div>
                    </div>

                    <div className="row">
                        <div id="accordion" className="text-center row" role="tablist">
                            <div className="card col-12 col-sm-12 col-md-4 offset-md-4 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
                                <div className="card-header" role="tab" id="headingOne">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h3> SUMMARY </h3>
                                        </a>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body ">
                                        {this.state.series.summary}
                                    </div>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-12 col-md-4 offset-md-4 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
                                <div className="card-header" role="tab" id="headingTwo">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            {<h3> SEASONS({this.state.series.seasons.length}) </h3>}
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        {this.state.series.seasons.map((season, i) =>
                                            <div key={season.id}>
                                                <h5 >Season {i + 1}</h5><p> {season.premiereDate}</p>
                                                <hr />
                                            </div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-12 col-md-4 offset-md-4 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
                                <div className="card-header" role="tab" id="headingThree">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h3> CAST </h3>
                                        </a>
                                    </h5>
                                </div>

                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">

                                        {this.state.series.cast.map((actor, i) => {
                    
                                            if (i < 5) {

                                                let actorImg = actor.person.image.medium || "http://via.placeholder.com/150x150";

                                                return (<div className="row" key={actor.person.id}>
                                                    <div className="col-12 ">
                                                        <img id="actor-picture" className="img-thumbnail" src={actorImg} alt="Actor/actress " />
                                                    </div>
                                                    <div className="col-12 text-center">
                                                        <h4>{actor.person.name} </h4>
                                                    </div>
                                                </div>)
                                            }
                                        }
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        );
    }
}