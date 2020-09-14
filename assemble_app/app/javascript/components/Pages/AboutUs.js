import React, {Component} from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Col,
    Card,
    CardDeck,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    CardSubtitle
  } from 'reactstrap';

class AboutUs extends Component{
    render(){
        return(
            <React.Fragment>
             <br/><br/>
                <h1 id="h1-dark-blue">About Us</h1>
                <p id="about-us-body">Hi! We are Point of No Return, a web development team from San Diego, CA. We are currently part of LEARN Academy, a full-stack web development bootcamp. Together, we created Assemble: a team building app for the tech space. Learn a litte more about us below.</p>
                <br/>
                <CardDeck style={{width:"50%", margin:"auto"}}>
                    <Card style={{border:"none"}}>
                        <CardImg top width="50%" src="https://i.ibb.co/bFGmb4r/trip.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle id="h3-filter-blue">Trip Moore</CardTitle>
                            <CardText id="filter-body-text">Low-key health enthusiast, athlete, love the outdoors.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{border:"none"}}>
                        <CardImg top width="50%" src="https://i.ibb.co/gJ7bVhd/miguel.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle id="h3-filter-blue">Miguel Palo</CardTitle>
                            <CardText id="filter-body-text">Likes to capture light, enjoys the hands on process of many different things: building PC’s, developing and scanning film, printing clothes, and making web apps.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{border:"none"}}>
                        <CardImg top width="50%" src="https://i.ibb.co/vkPfdpz/cynthia.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle id="h3-filter-blue">Cynthia Navarro</CardTitle>
                              <CardText id="filter-body-text">Graphic designer, boba enthusiast, bike rider; combining creativity and logic through front-end web development.</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </React.Fragment>
        )
    }
}

export default AboutUs