import React, { Component } from 'react'
import ProjectBlock from '../blocks/ProjectBlock'

export class Projects extends Component {
    render() {
        return (
            <>
                <h1> Projects Section </h1>
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
                    project_link="https://github.com/WhenDustSettles/Neural-Turing-Machine"
                    project_image= "../assets/img/Logo.png"
                />
            </>
        )
    }
}

export default Projects
