import React, { Component } from 'react'
import {
<<<<<<< HEAD
  Col,
  Form,
=======
  Card,
  CardBody,
  CardDeck,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Filter extends Component{
<<<<<<< HEAD
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         apartments: []
    //     }
    // }

    handleChange = (e) => {
        // destructuring form out of state
        // let { form } = this.state
        let filterOption = e.target.value
        console.log("filterOption:", filterOption);
        // setting state to the updated form
        this.props.updateCurrentFiltersSelected(filterOption)
        // console.log("currentFiltersSelected:", this.props.currentFiltersSelected);
        console.log("updateCurrentFiltersSelected:", this.props.updateCurrentFiltersSelected);
    }

=======
>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
  render(){
    return(
      <React.Fragment>
          <div className="filter-container">
<<<<<<< HEAD
            <Form>
                <FormGroup row>
                    <Col>
                        <Label className="filter-label, filter-container" for="checkbox1">Front-end Web Dev</Label>
                        <FormGroup check>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox"
                                    id="checkbox1" 
                                    value= "HTML"
                                    name="HTML"
                                    onChange = { this.handleChange }
                                    />
                                HTML
                            </Label>
                            <Label className="filter-label" check>
=======
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
>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "CSS"
<<<<<<< HEAD
                                    onChange = { this.handleChange }
                                    />{' '}
                                CSS
                            </Label>
                            <Label className="filter-label" check>
=======
                                    />{' '}
                                CSS
                            </Label>
                            <Label check>
>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "JavaScript"
<<<<<<< HEAD
                                    onChange = { this.handleChange }
=======
>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
                                    />{' '}
                                JavaScript
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
<<<<<<< HEAD

            </Form>
          </div>
=======
            {/* </Row> */}
          </div>

>>>>>>> a28353a42bac725ae5033f0ba48d83426541275b
      </React.Fragment>
    )
  }
}
export default Filter

