import React from 'react';
import './PortfolioPage.scss';
import ScreenshotApiImg from '../assets/screenshotapi.png';
import ScraperboxImg from '../assets/scraperbox.png';
import WoningAlertImg from '../assets/woningalert.png';
import DaveTheZombieSlayerImg from '../assets/dave-the-zombie-slayer.png';
import ProjectCard from './ProjectCard';

function PortfolioPage() {
    return (
        <>
            <div className={'col-lg-12'}>
                <h1 className={'portfolio-title'}>
                    My <span className={'accent'}>Projects</span>
                </h1>

                <p className={'portfolio-subtitle'}>
                    Take a look at some of my work.{' '}
                    <span role={'img'} aria-label={'man sitting behind computer'}>
                        👨‍💻
                    </span>
                    <br />
                    This includes work-experience, startups and projects just for fun.
                </p>
            </div>
            <div className={'col-lg-12'}>
                <div className={'row projects'}>
                    <ProjectCard
                        title={'ScreenshotAPI'}
                        description={'Micro-SaaS for Developers, acquired in 2020.'}
                        image={ScreenshotApiImg}
                        link={'https://screenshotapi.net'}
                    />

                    <ProjectCard
                        title={'Dave The Zombie Slayer'}
                        description={
                            'Armed with a crossbow Dave must slay endless hordes of zombies.'
                        }
                        image={DaveTheZombieSlayerImg}
                        link={
                            'https://play.google.com/store/apps/details?id=com.companyname.DaveTheZombieSlayer_Android&hl=en_US'
                        }
                    />

                    <ProjectCard
                        title={'ScraperBox'}
                        description={'Web Scraping API.'}
                        image={ScraperboxImg}
                        link={'https://scraperbox.com'}
                    />

                    <ProjectCard
                        title={'WoningAlert'}
                        description={'Find a place to live in our crazy rental market.'}
                        image={WoningAlertImg}
                        link={'https://woningalert.com'}
                    />
                </div>
            </div>
        </>
    );
}

export default PortfolioPage;
