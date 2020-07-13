import React, { Component } from 'react';
import ParticleBlock from '../blocks/ParticleBlock';

import Logo from '../assets/img/IITG.ai_Logo3.png';
//import Logo from '../assets/img/IITG_svg.svg';

export default class Landing extends Component {
    render() {
        return(
            <div className="home">
                <ParticleBlock />
                <div className="home-title text-center">
                    <img src={Logo} height="250" alt="logo"/>
                    <div className="slogan">
                        <h2 style={{color: 'white', fontSize: "1.75em"}}>{this.props.message}</h2>
                    </div>
                </div>
                <div className="next_section_scroll">
                    <div className="next_section nav_links" data-scroll-to="#industry">
                        <i className="fas fa-chevron-down trans_200"></i>
                        <i className="fas fa-chevron-down trans_200"></i>
                    </div>
                </div>
            </div>
        );
    }
}
