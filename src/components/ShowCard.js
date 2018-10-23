import React from 'react';

export const ShowCard = props =>{
        return(
          <div className="card mx-auto">
            <img className="card-img-top rounded " src={props.image} alt="Card "/>
            <div className="card-body">
              <h4 className="card-title">{props.name}</h4>
            </div>
          </div>
        );
    }
