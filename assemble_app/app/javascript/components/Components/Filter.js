import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardDeck,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Filter extends Component{
  render(){
    return(
      <React.Fragment>
          <div className="filter-container">
            {/* <Row xs="1" sm="2" md="3"> */}
                <FormGroup row>
                    <Label for="checkbox1">Front-end Web Dev Headline</Label>
                    <Col>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "HTML"
                                    />{' '}
                                HTML
                            </Label>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "CSS"
                                    />{' '}
                                CSS
                            </Label>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "JavaScript"
                                    />{' '}
                                JavaScript
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
            {/* </Row> */}
          </div>

      </React.Fragment>
    )
  }
}
export default Filter

