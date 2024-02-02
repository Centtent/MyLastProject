import React from 'react'

const ProjectDetail = ({ project }) => {
    return (
        <div className='row'>
            <div className="col-sm-6">
                <div className="card large">
                    <img src={project.imageUrl} alt={project.name} className='rounded' />
                    <section className="section dark">
                        <h3 className="strong">
                            <strong>{project.name}</strong>
                        </h3>
                        <p>{project.description}</p>
                        <p>{project.nudget}</p>
                        <p>Signed: {project.contractSignedOn}</p>
                        <p>
                            <mark className='active'>
                                {" "}
                                {project.isActive ? "acive" : "inactive"}
                            </mark>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
