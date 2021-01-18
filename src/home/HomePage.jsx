import React, { useState } from 'react';
import './HomePage.scss';
import Me from '../assets/me.jpg';
import useInterval from '../utils/interval';
import { Link } from 'react-router-dom';

const finalTitle = "I'm a Full-Stack Developer";

const HomePage = () => {
    const [title, setTitle] = useState('');

    useInterval(() => {
        if (title.length === finalTitle.length) {
            return;
        }
        setTitle(title + finalTitle.charAt(title.length));
    }, 40);

    return (
        <>
            <div className={'col-md-4'}>
                <div className={'main-profile-image'}>
                    <img src={Me} alt="Me" />
                </div>
            </div>
            <div className={'col-md-8 a col-lg-6 align-self-center main-text'}>
                <span className="greeting">
                    Hi
                    <span role="img" aria-label={'wave'}>
                        👋
                    </span>
                </span>
                <h1 className={'name'}>
                    <span className={'accent'}>Dirk Hoekstra</span>
                </h1>
                <h2 className="header-title">
                    {title}
                    {title.length !== finalTitle.length && '|'}
                </h2>

                <p className={'short-info'}>
                    I&apos;m a full-stack developer with 3 years of work experience. I like building
                    cool products that bring something positive into the world. I have worked mostly
                    with Laravel and Vue, but I have also recently jumped the Golang hype-train.
                    I&apos;m open, enthusiastic and driven. I have created numerous startups of
                    which one was acquired in 2020.
                </p>

                <p>
                    <Link to={'/portfolio'} className={'btn btn-primary btn-portfolio'} href={'#'}>
                        <i className="fas fa-briefcase"></i>
                        My Projects
                    </Link>

                    <span className={'links'}>
                        <a
                            href="https://www.linkedin.com/in/dirk94/"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:dirkhoekstra@gmail.com" target="_blank" rel="noreferrer">
                            <i className="fas fa-envelope-square"></i>
                        </a>

                        <a
                            href="https://medium.com/@dirk_hoekstra"
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-medium"></i>
                        </a>
                        <a href="https://github.com/Dirk94" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </span>
                </p>
            </div>
        </>
    );
};

export default HomePage;
