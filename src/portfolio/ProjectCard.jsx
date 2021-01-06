import 'react';
import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard(props) {
    return (
        <div
            className="mix col-md-6 col-lg-4 gallery-item cat-1 cat-3"
            style={{ display: 'inline-block' }}
            data-bound="">
            <a
                href={props.link}
                target={'_blank'}
                rel={'noopener noreferrer'}
                className="gallery-item-content pp">
                <div className="item-thumbnail">
                    <img src={props.image} alt="Screenshotapi homepage" />
                    <div className="content-overlay">
                        <div className="content">
                            <h4 className="project-title">{props.title}</h4>
                            <span className="project-subtitle">{props.description}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

ProjectCard.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default ProjectCard;
