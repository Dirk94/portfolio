import React from 'react';
import './PortfolioPage.scss';
import ScreenshotApiImg from '../assets/screenshotapi.png';
import ScraperboxImg from '../assets/scraperbox.png';
import WoningAlertImg from '../assets/woningalert.png';
import DaveTheZombieSlayerImg from '../assets/dave-the-zombie-slayer.png';
import DashbordImg from '../assets/dashbord.png';
import ProjectCard from './ProjectCard';
import { PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const projects = [
    {
        title: 'ScraperBox',
        description: 'Web Scraping API.',
        longDescription:
            'A SaaS that makes web scraping easy. Users can call the API, it will spin up a browser, connect to a proxy, and retrieve the website. The API is a Typescript application running on Google Cloud.',
        date: 2020,
        image: ScraperboxImg,
        link: 'https://scraperbox.com',
        technologies: 'Laravel, Vue, Typescript, Google Cloud'
    },
    {
        title: 'WoningAlert',
        description: 'Find a place to live in our crazy rental market.',
        longDescription:
            "I build this website because I couldn't find a place to live in Amsterdam. This website scrapes all rental listing websites in Amsterdam and sends you instant email notifications of new rental listings.",
        date: 2020,
        image: WoningAlertImg,
        link: 'https://woningalert.com',
        technologies: 'Laravel, Vue'
    },
    {
        title: 'ScreenshotAPI',
        description: 'Micro-SaaS for developers, acquired in 2020.',
        longDescription:
            'An API that takes screenshots. The website is built with Laravel and Vue. The API is a NodeJS application running on Google Cloud Run. Acquired in 2020 by a Silicon Valley tech investment fund.',
        date: 2019,
        image: ScreenshotApiImg,
        link: 'https://screenshotapi.net',
        technologies: 'Laravel, Vue, Node, Google Cloud'
    },
    {
        title: 'Dashbord',
        description: 'Data insights for restaurant owners.',
        longDescription:
            'Franchise restaurant owners generate a lot of data but often struggle to get insights from this data. Dashbord combines all restaurant data in a single easy-to-use dashboard.',
        date: 2019,
        image: DashbordImg,
        link: 'https://dashbord.nl',
        technologies: 'Laravel, Vue'
    },
    {
        title: 'Dave The Zombie Slayer',
        description: 'Armed with a crossbow Dave must slay endless hordes of zombies.',
        image: DaveTheZombieSlayerImg,
        link:
            'https://play.google.com/store/apps/details?id=com.companyname.DaveTheZombieSlayer_Android&hl=en_US',
        longDescription:
            'A project 100% for the fun of it. Dave the zombie slayer is my first Android app ever. Slay endless hordes of Zombies! Created with Java.',
        date: 2016,
        technologies: 'Java'
    }
];

function PortfolioPage() {
    let cards = [];
    for (const [index, project] of projects.entries()) {
        cards.push(<ProjectCard key={index} {...project} />);
    }

    return (
        <>
            <div className={'col-lg-12'}>
                <h1 className={'portfolio-title'}>
                    My <span className={'accent'}>Projects</span>
                </h1>

                <p className={'portfolio-subtitle'}>
                    Take a look at some of my work.
                    <span role={'img'} aria-label={'man sitting behind computer'}>
                        👨‍💻
                    </span>
                    <br />
                    This includes work-experience, startups and projects just for fun.
                </p>
            </div>
            <div className={'col-lg-12'}>
                <div className={'row projects'}>{cards}</div>
            </div>

            <PopupboxContainer />
        </>
    );
}

export default PortfolioPage;
