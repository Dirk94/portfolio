import React from 'react';
import './ProjectDetails.scss';
import PropTypes from 'prop-types';

function ProjectDetails(props) {
    return (
        <div className="container project-details-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-area">
                        <h3 className="project-title">{props.title}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 image-container">
                    <img src={props.image} alt={'project'} />
                </div>
                <div className="col-md-6">
                    <div className="project-details-info">
                        <h5 className="">Project Info</h5>
                        <p>{props.longDescription}</p>

                        <h5 className="mt-5">Project Details:</h5>
                        <ul className="info-list">
                            <li>
                                <span>Technologies:</span>
                                {props.technologies}
                            </li>
                            <li>
                                <span>Date:</span> {props.date}
                            </li>
                            <li>
                                <a href={props.link} target="_blank" rel={'noopener noreferrer'}>
                                    View Project &rarr;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectDetails.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    longDescription: PropTypes.string,
    technologies: PropTypes.string,
    date: PropTypes.string
};

export default ProjectDetails;
