import React, { useState } from 'react';
import './HomePage.scss';
import Me from '../assets/me.jpg';
import useInterval from '../utils/interval';

const finalTitle = "I'm a Full-Stack Developer";

const HomePage = (props) => {
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
          <img src={Me} alt="Picture of me" />
        </div>
      </div>
      <div className={'col-md-8 a col-lg-6 align-self-center main-text'}>
        <span className="greeting">Hi 👋</span>
        <h1 className={'name'}>
          <span className={'accent'}>Dirk Hoekstra</span>
        </h1>
        <h2 className="header-title">
          {title}
          {title.length !== finalTitle.length && '|'}
        </h2>

        <p className={'short-info'}>
          I have 5+ years of work experience. My favorite stack is Vue with Laravel, but I&apos;m
          happy to use other technologies. Founder of 3 tech companies of which 1 was acquired in
          2020.
        </p>

        <p>
          <button className={'btn btn-primary btn-portfolio'} href={'#'}>
            <i className="fas fa-briefcase"></i>
            My Projects
          </button>

          <span className={'links'}>
            <a href="https://www.linkedin.com/in/dirk94/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:dirkhoekstra@gmail.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope-square"></i>
            </a>

            <a href="https://medium.com/@dirk_hoekstra" target="_blank" rel="noreferrer">
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
