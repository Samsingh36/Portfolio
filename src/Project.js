import React from 'react';
import './Project.css';
import Project1 from './img/portfolio-1.png';
import Project5 from './img/portfolio-5.png';
import Project3 from './img/portfolio-3.png';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className="heading p__color">
                    There are some of my best projects
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text" >CineFlix</h5>
                                <h4 className="project__text">Created using React.js and TMDB Api</h4>
                                <a href="https://samar-cineflix.netlify.app/" target="_blank" rel="noreferrer" className="project__btn">View Live</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">SnapSphere</h5>
                                <h4 className="project__text"> Developed using React.js, Bootstrap, and the Unsplash API</h4>
                                <a href="https://samar-snapsphere.netlify.app/" target="_blank" rel="noreferrer" className="project__btn">View Live</a>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">TrendCart</h5>
                                <h4 className="project__text">Created using Next.js and Tailwind CSS</h4>
                                <a href="https://smart-shop-liart.vercel.app/" target="_blank" rel="noreferrer" className="project__btn">View Live</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
