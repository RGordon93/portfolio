import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {/* <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a fullstack developer and musician, pursuing my passion for technology, solving problems and bringing joy to others through building purposeful, life-changing applications. I achieve my goals by leveraging my decision making and communication combined with a strong desire to experience those breakthrough moments.'}
                </p> */}
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a software engineer that has skills in both the back-end of web applications and the front-end. My previous roles as both  leader and follower have taught me how to work in a team environment to complete a common goal.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Communication is key when working with a group and I take pride in being a reliable active member of a team. I have a history of team success, strong leadership, and am a very highly motivated worker who is eager to help your company!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "When I'm not coding, I enjoy creating music, sketching, reading, gaming, travel, and sports. I have a passion for meeting new people and traveling the world. These interests have assisted me in harnesting the key values and skills necessary to thrive within a team & social environment."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
