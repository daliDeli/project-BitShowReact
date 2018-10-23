import React, { Component}  from 'react';

export default class Footer extends Component{
    
        render(){
            return(
                <footer className="text-center ">
                <p>Copyright © {new Date().getFullYear()}</p>
              </footer>
            );
        }
    }