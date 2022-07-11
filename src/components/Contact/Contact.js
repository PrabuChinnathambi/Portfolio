import React from "react";
import "./Contact.css";
import myImage from "../../images/prabu_new.jpeg";
import blogimg from "../../images/blogs_image.svg";
import address_image from "../../images/address_image.svg";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div className="contact_page">
      <div className="contact_container">
        <Fade bottom>
          <div className="contact_greeting">
            <img src={myImage} alt="mine" />
            <Fade right>
              <span className="quote">
                Nothing is Impossible But Everything is Possible...
              </span>
            </Fade>
          </div>
        </Fade>
        <div className="contact_content">
          <Fade bottom>
            <div className="contact_me">
              <div>
                <h2>Contact Me</h2>
                <p>
                  I am available on almost every social media. You can message
                  me, I will reply within 24 hours. I can help you with React,
                  Asp.Net, Pyhton, Cloud and Opensource Development.
                </p>
                <div className="media_icons">
                  <div className="ic_github">
                    <a href="https://github.com/PrabuChinnathambi">
                      <img
                        src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png"
                        alt="no"
                      />
                    </a>
                  </div>
                  <div className="ic_linkedin">
                    <a href="https://www.linkedin.com/in/prabu-c-843b8b185/">
                      <img
                        src="https://img.icons8.com/material-rounded/2x/ffffff/linkedin.png"
                        alt="no"
                      />
                    </a>
                  </div>
                  <div className="ic_twitter">
                    <a href="https://twitter.com/prabudev00">
                      <img
                        src="https://img.icons8.com/ios-glyphs/2x/ffffff/twitter.png"
                        alt="no"
                      />
                    </a>
                  </div>
                  <div className="ic_facebook">
                    <a href="https://www.facebook.com/profile.php?id=100007146586744">
                      <img
                        src="https://img.icons8.com/material-outlined/2x/ffffff/facebook-f.png"
                        alt="no"
                      />
                    </a>
                  </div>
                  <div className="ic_instagram">
                    <a href="https://www.instagram.com/p_r_a_b_u_sharma/">
                      <img
                        src="https://img.icons8.com/material-outlined/2x/ffffff/instagram-new.png"
                        alt="no"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <img src={blogimg} alt="blog" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="address">
              <img src={address_image} alt="address" />
              <div>
                <h2>Address</h2>
                <p>
                  7/277 Sellampalayam, P.Puliampatti, Sathy, Dist.- Erode,
                  TamilNadu - 638459{" "}
                </p>
                <h2>Phone Number</h2>
                <p>+91 9080853926</p>
                <h2>Email</h2>
                <p>prabudev00gmail.com</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="footer">
        <p>Made with ❤️ by Prabu...</p>
      </div>
    </div>
  );
}

export default Contact;
