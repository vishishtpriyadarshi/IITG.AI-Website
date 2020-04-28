import React, { Component } from 'react';

export default class extends Component {
    render() {
        //const logo = require(`../../images/logos/${this.props.logo}`);
        return(
            <div className="col-sm-2 col-md-2 col-lg-2" style={{height: "8em", margin: "0 auto", float: "none"}}>
                <a
                    href={this.props.link} 
                    className="client_item_background trans_200" 
                    style={{minHeight: this.props.minHeight, minWidth: this.props.minWidth}}
                >
				</a>
            </div>
        );
    }
}