import React from "react";
import "./Project.css";
import project_image from "../../images/projects_image.svg";
import react_logo from "../../images/logo192.png";
import Fade from "react-reveal/Fade";

function Project() {
  return (
    <div className="project_page">
      <div className="project_container">
        <Fade bottom>
          <div className="project_greeting">
            <img src={project_image} alt="project_logo" />
            <div className="greeting_details">
              <h1>Projects</h1>
              <h4>
                My projects makes use of vast variety of latest technology
                tools. My best experience is to create and deploy them to web
                applications using cloud infrastructure.
              </h4>
            </div>
          </div>
        </Fade>
        <div className="project_content">
          <Fade bottom>
            <a href="https://github.com/PrabuChinnathambi/Portfolio">
              <div className="project_card">
                <div className="card_head">
                  <img
                    src="https://img.icons8.com/nolan/2x/project.png"
                    alt="pro_logo"
                  />
                  <h3>Portfolio</h3>
                </div>
                <div className="card_body">
                  <p>
                    The complete portfolio website hosted using github pages
                    (gh-pages). Visit the website here :
                  </p>
                  <p className="craeted_at">Created on 2021-07-16</p>
                  <ul>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/html-5.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/css3.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img src={react_logo} alt="html" />
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </Fade>
          <Fade bottom>
            <a href="https://github.com/PrabuChinnathambi/SJSPhotography">
              <div className="project_card">
                <div className="card_head">
                  <img
                    src="https://img.icons8.com/nolan/2x/project.png"
                    alt="pro_logo"
                  />
                  <h3>SJS Photography</h3>
                </div>
                <div className="card_body">
                  <p>
                    The complete photography shop website. Which I have created
                    for my friend Hosted on Netlify platform.
                  </p>
                  <p className="craeted_at">Created on 2021-06-08</p>
                  <ul>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/html-5.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/css3.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img src={react_logo} alt="html" />
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </Fade>
          <Fade bottom>
            <a href="https://github.com/PrabuChinnathambi/Fish_Menu">
              <div className="project_card">
                <div className="card_head">
                  <img
                    src="https://img.icons8.com/nolan/2x/project.png"
                    alt="pro_logo"
                  />
                  <h3>Fish_Menu</h3>
                </div>
                <div className="card_body">
                  <p>
                    The is complete Fish curry e-cart shopping website. I have
                    used MERN stack technology in this application
                  </p>
                  <p className="craeted_at">Created on 2021-06-28</p>
                  <ul>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/html-5.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/css3.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img src={react_logo} alt="html" />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/mongodb.png"
                        alt="html"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </Fade>
          <Fade bottom>
            <a href="https://github.com/PrabuChinnathambi/Instagram_Clone">
              <div className="project_card">
                <div className="card_head">
                  <img
                    src="https://img.icons8.com/nolan/2x/project.png"
                    alt="pro_logo"
                  />
                  <h3>Instagram Clone</h3>
                </div>
                <div className="card_body">
                  <p>
                    This website fully related Instagram Clone. MongoDB used to
                    craeted the backend code.
                  </p>
                  <p className="craeted_at">Created on 2021-03-06</p>
                  <ul>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/html-5.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/css3.png"
                        alt="html"
                      />
                    </li>
                    <li>
                      <img src={react_logo} alt="html" />
                    </li>
                    <li>
                      <img
                        src="https://img.icons8.com/color/2x/mongodb.png"
                        alt="html"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </Fade>
        </div>
      </div>
      <div className="footer">
        <p>Made with ❤️ by Prabu...</p>
      </div>
    </div>
  );
}

export default Project;
