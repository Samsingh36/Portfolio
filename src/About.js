import React from 'react';
import './About.css';
import aboutImg from './img/about.jpg';

function About() {
    // Add event listener for scroll
    window.addEventListener('scroll', function () {
        const UpToTop = document.querySelector('a.bottom__to__top');
        UpToTop.classList.toggle('active', window.scrollY > 0);
    });

    return (
        <div className='about component__space' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} className='about__img' alt='About Me' /> {/* Add alt prop */}
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                        Why you should hire me!
                            <div className='about__meta'>
                                <p className='about__text p__color'>
                                    Passionate Developer | Problem Solver| Enthusiastic Learner
                                </p>
                                <p className='about__text p__color'>
                                Samar Pratap Singh is an exceptional individual known for his unwavering work ethic, punctuality, and remarkable intelligence. A dedicated tech enthusiast, he stays updated with the latest advancements. Beyond work, he's an avid table tennis player, enjoys reading newspapers, and enjoys exploring new cultures through travel, reflecting his zest for diverse experiences. He believes that, if given the opportunity, he can significantly contribute to the organization with his skills.
                                </p>
                                <div className='about__button d__flex align__items__center resume'>
                                <a href='/Resume.pdf' download='Resume.pdf'>
                                   <button className='about btn pointer resume'>Download Resume</button>
                                </a>

                                    <a href='mailto:samarpratapsingh587@gmail.com'>
                                        <button className='about btn pointer'> Hire Me</button>
                                    </a>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
            {/* Up to top button */}
            <div className="up__to__top__btn">
                <a href="#Home" className="bottom__to__top"> {/* Provide a valid href */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default About;
