import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import bike from '../../../images/bike.jpg';

const About = () => {
    return (
        <Container className="mt-5 about" >
            <Row className="about-section">
                <Col sm={12} md={6} className="mb-5">
                    <h6 style={{ letterSpacing: '0.05in' }}>ABOUT US</h6>
                    <br />
                    <h1>FIND THE RIGHT BIKE</h1>
                    <br />
                    <br />
                    <p>
                        3000+ unbiased, verified reviews from bike owners.<br /> Know the pros and cons of 200+ bike models from real owners.
                    </p>
                    <br />
                    <button className="about-btn">Explore</button>
                </Col>
                <Col sm={12} md={6} className="about-img">
                    <img src={bike} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;