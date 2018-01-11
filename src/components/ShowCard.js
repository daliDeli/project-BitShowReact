import React, { Component } from 'react';

export default class ShowCard extends Component {
    

    render(){
        return(
            // <div className="container">
            //     <img src={this.props.image} className="img-fluid rounded " alt="Responsive" />
            //     <h4>{this.props.name}</h4>
            // </div>
        <div className="card mx-auto">
          <img className="card-img-top rounded " src={this.props.image} alt="Card "/>
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
          </div>
        </div>
        );
    }
}
