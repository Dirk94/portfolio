import 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { PopupboxManager } from 'react-popupbox';
import ProjectDetails from './ProjectDetails';

function ProjectCard(props) {
    const openPopup = () => {
        PopupboxManager.open({ content: ProjectDetails(props) });
    };
    return (
        <>
            <div
                className="mix col-md-6 col-lg-4 gallery-item cat-1 cat-3"
                style={{ display: 'inline-block' }}>
                <span
                    onClick={openPopup}
                    onKeyDown={openPopup}
                    role={'button'}
                    tabIndex={0}
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
                </span>
            </div>
        </>
    );
}

ProjectCard.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    longDescription: PropTypes.string,
    technologies: PropTypes.string,
    date: PropTypes.string
};

export default ProjectCard;
