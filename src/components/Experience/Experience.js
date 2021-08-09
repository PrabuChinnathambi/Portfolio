import React from 'react';
import './Experience.css';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import experience from '../../images/experience.svg';
import infosysLogo from '../../images/Infosys_logo.png';


function Experience() {
    return (
        <div className="exp_page">
            <Fade top>
                <div>
                    <Navbar />
                </div>
            </Fade>
            <div className="exp_container">
                <div className="exp_greeting">
                    <img src={experience} alt="experience" />
                    <div className="exp_greeting_quotes">
                        <h1>Experience</h1>
                        <h4>“Learn from every mistake, because every experience particularly your mistakes, are there to teach you and force you into being more of who you are.” - Oprah Winfrey</h4>
                    </div>
                </div>
                <div className="exp_content">
                    <div className="content_details">
                        <h1>Work Experience</h1>
                        <div className="exp_card_container">
                            <div className="exp_card">
                                <div className="company_logo">
                                    <img src="data:image/png;base64,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" alt="no" />
                                </div>
                                <div className="exp_details">
                                    <div className="detail_head">
                                        <h2>Mobius365 Data Services</h2>
                                        <h4>Process Associate - Data Research</h4>
                                        <p className="year">May 2019 - Oct 2019</p>
                                    </div>
                                    <div className="detail_body">
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <p>Primary responsible for gathering and analyzing data, maintaining and constantly improving the quality of an organization's data, and collaborating with the research team to present data in a convincing way</p></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="exp_card_container">
                            <div className="exp_card">
                                <div className="company_logo">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQG2j1UyjySumw/company-logo_200_200/0/1625115318015?e=2159024400&v=beta&t=Bt3KgUp3T7RhDy9Arcs3Q8V0BUw2_REviE4eWkSyWag" alt="no" />
                                </div>
                                <div className="exp_details">
                                    <div className="detail_head">
                                        <h2>Mobius365 Data Services</h2>
                                        <h4>Process Associate - Data Research</h4>
                                        <p className="year">May 2019 - Oct 2019</p>
                                    </div>
                                    <div className="detail_body">
                                        <span>
                                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/backhand-index-pointing-right_1f449.png" alt="emoji" />
                                            <p>Primary responsible for gathering and analyzing data, maintaining and constantly improving the quality of an organization's data, and collaborating with the research team to present data in a convincing way</p></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience
