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
                        <p className="lead" id="hero-body">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information. This is a simple hero unit, a simple Jumbotron-style com.</p>
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
                                        <CardText id="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
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
                                        <CardText id="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
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
                                        <CardText id="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
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