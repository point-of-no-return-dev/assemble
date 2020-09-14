import React, {Component} from 'react';
import { 
    Jumbotron,
    Card,
    CardDeck,
    CardImg,
    CardBody,
    CardTitle,
    Button, 
    Container,
    CardText,
    Row, 
    Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <div>
                    <Jumbotron id="hero-image">
                        <h1 id="h1-white">CREATE. FIND. ASSEMBLE.</h1>
                        <p className="lead" id="hero-body">Assemble is a team building app where people can create projects, collaborate, show off technical skills and expand their network. Find your team and be on your way to start your own project.</p>
                        <p>
                            <br/>
                            {/* Button will take you to the index of projects */}
                            <NavLink id="center" to={"/index"}>
                                <Button id="primary-btn" color="primary">View Projects</Button>
                            </NavLink>
                        </p>
                    </Jumbotron>
                </div>

                {/* //For Create Section */}


                <Container>
                    <Row>
                        <CardDeck>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardBody>
                                        <h3 id="h3-dark-blue">CREATE.</h3>
                                        <CardText id="section-text">With Assemble, you have the ability to post new project based on specific technologies and skillsets, allowing you to find the right community for you web development needs.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardImg id="section-image" src="https://i.ibb.co/HB84WpB/lp-create-1.png" alt="Card image cap" />
                                </Card>
                            </Col>
                        </CardDeck>
                    </Row>
                </Container>


                {/* //For Find Secion */}
                <Container>
                    <Row>
                        <CardDeck>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardImg id="section-image" src="https://i.ibb.co/QmFMGz6/lp-find-1.png" alt="Card image cap" />
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardBody>
                                        <h3 id="h3-orange">FIND.</h3>
                                        <CardText id="section-text">You can also have the ability to search for projects you might be interested in. Find your own team, collaborate, and show off your technical skills to expand their network.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </CardDeck>
                    </Row>
                </Container>



                {/* //For Assemble Section */}
                <Container>
                    <Row>
                        <CardDeck>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardBody>
                                        <h3 id="h3-teal">ASSEMBLE.</h3>
                                        <CardText id="section-text">We invision our app to be primarily used by students, new developers looking for more experience, and/or freelancers looking for a team. So, got a project idea and looking for a team? Create. Find. Assemble.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card id="no-border">
                                    <CardImg id="section-image" src="https://i.ibb.co/vPcFGkN/lp-assemble-1.png" alt="Card image cap" />
                                </Card>
                            </Col>
                        </CardDeck>
                    </Row>
                </Container>

                
            </React.Fragment>
        )
    }
}
export default Landing