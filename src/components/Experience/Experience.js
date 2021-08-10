import React from 'react';
import './Experience.css';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import experience from '../../images/experience.svg';
// import infosysLogo from '../../images/Infosys_logo.png';
import Flip from 'react-reveal/Flip';


function Experience() {
    return (
        <div className="exp_page">
            <Fade top>
                <div>
                    <Navbar />
                </div>
            </Fade>
            <div className="exp_container">
                <Fade bottom>
                    <div className="exp_greeting">
                        <img src={experience} alt="experience" />
                        <div className="exp_greeting_quotes">
                            <h1>Experience</h1>
                            <h4>“Learn from every mistake, because every experience particularly your mistakes, are there to teach you and force you into being more of who you are.” - Oprah Winfrey</h4>
                        </div>
                    </div>
                </Fade>
                <div className="exp_content">
                    <div className="content_details">
                        <h1>Work Experience</h1>
                        <div className="exp_card_container">
                            <div className="exp_card">
                                <Flip top>
                                    <div className="company_logo">
                                        <img src="data:image/png;base64,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" alt="no" />
                                    </div>
                                </Flip>
                                <div className="exp_details">
                                    <Flip top>
                                        <div className="detail_head">
                                            <h2>Infosys Private Limited</h2>
                                            <h4>Operation Exicutive</h4>
                                            <p className="year">Oct 2019 - Present</p>
                                        </div>
                                    </Flip>
                                    <div className="detail_body">
                                        <h3>Unilever Project:</h3>
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <Fade right>
                                                <p>I'm currently working in Unilever project in Infosys. The roll should I have to manage 10 more applications already in live. Maintaining and supporting the ticket issues. Resolve the issue within a time and delever to the client.</p>
                                            </Fade>
                                        </span>
                                        <h3>Wakmart Project:</h3>
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <Fade right>
                                                <p>I have worked in front-end development team. It's kind of Migration process. Previously all the applications are deployed in a walmart server. Our roll to  moving all those apps to cloud platform of Azure. Technology which i have used Asp.Net,Azure,C#...etc</p>
                                            </Fade>
                                        </span>
                                        <h3>Training Period:</h3>
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <Fade right>
                                                <p>I got more skills in my training. Especialy, I have trained one month for Pyhton basics and RDBMS. Later I got full knowlodge about web development through C#, Asp.Net, DBMS</p>
                                            </Fade>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="exp_card_container">
                            <div className="exp_card">
                                <Flip top>
                                    <div className="company_logo">
                                        <img src="data:image/png;base64,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" alt="no" />
                                    </div>
                                </Flip>
                                <div className="exp_details">
                                    <Flip top>
                                        <div className="detail_head">
                                            <h2>Mobius365 Data Services</h2>
                                            <h4>Process Associate - Data Research</h4>
                                            <p className="year">May 2019 - Oct 2019</p>
                                        </div>
                                    </Flip>
                                    <div className="detail_body">
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <Fade right>
                                                <p>Primary responsible for gathering and analyzing data, maintaining and constantly improving the quality of an organization's data, and collaborating with the research team to present data in a convincing way</p>
                                            </Fade>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Made with ❤️ by Prabu...</p>
            </div>

        </div>
    )
}

export default Experience
