import React from 'react'
import Navbar from '../Navbar/Navbar'
import feelingProud from '../../images/feelingProud.svg';
import github from '../../images/github.png';
import fullstack from '../../images/fullstack.svg';
import cloud_infrastructure from '../../images/cloud_infrastructure.svg';

import './Home.css';
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div className="home_page">
            <Fade top>
                <div>
                    <Navbar />
                </div>
            </Fade>

            <div className="home_container">
                <Fade bottom>
                    <div className="front_content">
                        <div className="front_contect_left">
                            <h1>Prabu Chinnathambi</h1>
                            <h2>(@prabu_sharma)</h2>
                            <p>A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                            <div className="media_icons">
                                <div className="ic_github"><a href="https://icons8.com/icons/set/instagram-icon--white"><img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="no" /></a></div>
                                <div className="ic_linkedin"><a href=""><img src="https://img.icons8.com/material-rounded/2x/ffffff/linkedin.png" alt="no" /></a></div>
                                <div className="ic_twitter"><a href=""><img src="https://img.icons8.com/ios-glyphs/2x/ffffff/twitter.png" alt="no" /></a></div>
                                <div className="ic_facebook"><a href=""><img src="https://img.icons8.com/material-outlined/2x/ffffff/facebook-f.png" alt="no" /></a></div>
                                <div className="ic_instagram"><a href=""><img src="https://img.icons8.com/material-outlined/2x/ffffff/instagram-new.png" alt="no" /></a></div>
                            </div>
                        </div>
                        <div className="front_contect_right">
                            <img src={feelingProud} alt="v" />
                        </div>
                    </div>
                </Fade>
                <div className="what_do">
                    <h1>What I Do? </h1>
                    <div className="what_do_content">
                        <div className="full_stack">
                            <Fade left>
                                <div className="content_left">
                                    <img src={fullstack} alt="fullstack" />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="content_right">
                                    <h1>Full Stack Development</h1>
                                    <div className="skill_logos">
                                        <img src="https://img.icons8.com/color/2x/html-5.png" />
                                        <img src="https://img.icons8.com/color/2x/css3.png" />
                                        <img src="https://img.icons8.com/color/2x/javascript.png" />
                                        <img src="https://img.icons8.com/color/2x/react-native.png" />
                                        <img src="https://img.icons8.com/color/2x/nodejs.png" />
                                        <img src="https://img.icons8.com/color/2x/c-sharp-logo-2.png" />
                                    </div>
                                    <div className="skill_points">
                                        <p>⚡ Building resposive website front end using React app</p>
                                        <p>⚡ Creating application backend in Node, Express & MongoDB</p>
                                        <p>⚡ Building Full stack web app using MERT stack technology</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="full_stack">
                            <Fade left>
                                <div className="content_left">
                                    <img src={cloud_infrastructure} alt="fullstack" />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="content_right">
                                    <h1>Cloud Infra-Architecture</h1>
                                    <div className="skill_logos">
                                        <img src="https://img.icons8.com/color/2x/amazon-web-services.png" />
                                        <img src="https://img.icons8.com/color/2x/google-firebase-console.png" />
                                        <img src="https://img.icons8.com/color/2x/azure-1.png" />
                                        <img src="https://img.icons8.com/color/2x/heroku.png" />

                                    </div>
                                    <div className="skill_points">
                                        <p>⚡ Experience working on multiple cloud platforms</p>
                                        <p>⚡ Hosting and maintaining websites</p>
                                        <p>⚡ Deploying MERN stack application into the cloud</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <Fade bottom>
                <div className="footer">
                    <p>Made with ❤️ by Prabu...</p>
                </div>
            </Fade>
        </div>
    )
}

export default Home
