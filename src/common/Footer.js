import React, { Component}  from 'react';

export default class Footer extends Component{
    
        render(){
            return(
                <footer id="footer">
                    <p>Copyright © {new Date().getFullYear()}</p>
                </footer>
            );
        }
    }