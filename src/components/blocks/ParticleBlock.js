import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class ParticleBlock extends Component {
    render() {
        return (
            <div id="particles-js">
                <Particles
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    params={{
                        particles: {
                            number: {
                                value: 175,
                                density: {
                                    enable: true,
                                    value_area: 700
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 3,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 4,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 2,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 5,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                            enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "bubble"
                                },
                                resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 0.2
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                        },
                        retina_detect: true
                    }}
                />
            </div>
        )
    }
}