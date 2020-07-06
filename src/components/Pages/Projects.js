import React, { Component } from 'react'
import ProjectBlock from '../blocks/ProjectBlock'

export class Projects extends Component {
    render() {
        return (
            <div>
                <div style={{paddingBottom: "4%"}} className="font-family">
                    <h1 style={{textAlign: 'center', color: "#000000", fontWeight: '1100'}}>Projects</h1>
                </div>
                <ProjectBlock 
                    project_title="Neural Turing Machine"
                    description="Implementation and Evaluation of Neural Turing Machine, a Memory Augmented RNN based architecture which can infer low level algorithms"
                    project_link="https://github.com/WhenDustSettles/Neural-Turing-Machine"
                    project_image= "../assets/img/Logo.png"
                />
                <ProjectBlock 
                    project_title="Neural Turing Machine"
                    description="Implementation and Evaluation of Neural Turing Machine, a Memory Augmented RNN based architecture which can infer low level algorithms"
                    project_link="https://github.com/WhenDustSettles/Neural-Turing-Machine"
                    project_image= "../assets/img/Logo.png"
                />
                <ProjectBlock 
                    project_title="Neural Turing Machine"
                    description="Implementation and Evaluation of Neural Turing Machine, a Memory Augmented RNN based architecture which can infer low level algorithms"
                    project_link= "https://github.com/WhenDustSettles/Neural-Turing-Machine"
                    project_image= "../assets/img/Logo.png"
                />
            </div>
        )
    }
}

export default Projects
