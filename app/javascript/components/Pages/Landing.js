import React, {Component} from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <div>
                    <Jumbotron>
                        <h1 className="display-3">CREATE.FIND.ASSEMBLE.</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p className="lead">
                            {/* Button will take you to the index of projects */}
                            <NavLink to={"/index"}>
                                <Button color="primary">View Projects</Button>
                            </NavLink>
                        </p>
                    </Jumbotron>
                </div>

                {/* //For Create Section */}
                <div className="landing-section-header">
                    <h3>CREATE.</h3>
                </div>
                <Container className="themed-container" fluid={true}>
                    <Row xs="2">
                        <Col>
                            <p>About Create.</p>
                        </Col>
                        <Col>
                            <img src="" alt = "Some image showing create" />
                        </Col>
                    </Row>
                </Container>

                {/* //For Find Secion */}
                <div className="landing-section-header">
                    <h3>FIND.</h3>
                </div>
                <Container className="themed-container" fluid={true}>
                    <Row xs="2">
                        <Col>
                            <img src="" alt = "Some image showing create" />
                        </Col>
                        <Col>
                            <p>About Find.</p>
                        </Col>
                    </Row>
                </Container>

                {/* //For Assemble Section */}
                <div className="landing-section-header">
                    <h3>ASSEMBLE.</h3>
                </div>
                <Container className="themed-container" fluid={true}>
                    <Row xs="2">
                        <Col>
                            <p>About Assemble.</p>
                        </Col>
                        <Col>
                            <img src="" alt = "Some image showing create" />
                        </Col>
                    </Row>
                </Container>
                
            </React.Fragment>
        )
    }
}
export default Landing