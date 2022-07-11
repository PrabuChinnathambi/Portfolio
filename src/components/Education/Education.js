import React from "react";
import "./Education.css";
import education from "../../images/education.svg";
import bharathiyar from "../../images/bharathiyar_university.jpg";
import high_school from "../../images/high_school.png";
import school from "../../images/school.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

function Education() {
  return (
    <div className="education_page">
      <div className="education_container">
        <Fade bottom>
          <div className="greeting_education">
            <img src={education} alt="education" />
            <div className="edu_quotes">
              <h1>Education</h1>
              <h4>
                {" "}
                “Live as if you were to die tomorrow. Learn as if you were to
                live forever” – Mahatma Gandhi
              </h4>
            </div>
          </div>
        </Fade>

        <div className="degrees">
          <h2>Degrees Received</h2>
          <div>
            <div className="college">
              <Flip left>
                <div className="bharathiyar_logo">
                  <img src={bharathiyar} alt="college" />
                </div>
              </Flip>
              <Fade right>
                <div className="degree_details">
                  <div className="degree_head">
                    <h3>Sankara College of Science and Commerce</h3>
                    <h4>
                      BSc Information Technology ( Bharathiyar University )
                    </h4>
                    <p className="year">2016 - 2019</p>
                  </div>
                  <div className="degree_points">
                    <p>
                      ⚡ I have studied basic software subjects like Java, C++,
                      Html, Css, DS, DBMS, OS etc.
                    </p>
                    <p>
                      ⚡ Apart from this, I have done courses Pyhton, ASP.Net,
                      React and Full Stack Development.
                    </p>
                    <p>⚡ I have done some projects in Pyhton</p>
                  </div>
                  <div className="gpa">
                    <p>GPA - 73.12%</p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="college">
              <Flip left>
                <div className="bharathiyar_logo">
                  <img src={high_school} alt="college" />
                </div>
              </Flip>
              <Fade right>
                <div className="degree_details">
                  <div className="degree_head">
                    <h3>KVK Govt Higher Secondary School</h3>
                    <h4>Computer Science Group</h4>
                    <p className="year">2014 - 2016</p>
                  </div>
                  <div className="degree_points">
                    <p>⚡ I have studied of computer related subjects</p>
                    <p>
                      ⚡ Also studied mager subjects of Pyshics, Chemistery and
                      Maths
                    </p>
                    <p>
                      ⚡ Apart from this, I have played division level hockey
                    </p>
                  </div>
                  <div className="gpa">
                    <p>GPA - 84.66%</p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="college">
              <Flip left>
                <div className="bharathiyar_logo">
                  <img src={school} alt="college" />
                </div>
              </Flip>
              <Fade right>
                <div className="degree_details">
                  <div className="degree_head">
                    <h3>KVK Govt Higher Secondary School</h3>
                    <h4>Common Group</h4>
                    <p className="year">2013 - 2014</p>
                  </div>
                  <div className="degree_points">
                    <p>
                      ⚡ I have studied basics of computer and core subjects
                    </p>
                    <p>
                      ⚡ Apart from this, I got a district level hockey winner
                      certificate
                    </p>
                  </div>
                  <div className="gpa">
                    <p>GPA - 87.40%</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Made with ❤️ by Prabu...</p>
      </div>
    </div>
  );
}

export default Education;
