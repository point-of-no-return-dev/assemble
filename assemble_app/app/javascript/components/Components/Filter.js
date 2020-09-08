import React, { Component } from 'react'
import {
  Form,
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

  render(){
    return(
      <React.Fragment>
          <div className="filter-container">
                <FormGroup row>
                    <Label for="checkbox1">Front-end Web Dev Headline</Label>
                    <Col>
                        <FormGroup check>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "HTML"
                                    onChange = { this.handleChange }
                                    />{' '}
                                HTML
                            </Label>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "CSS"
                                    onChange = { this.handleChange }
                                    />{' '}
                                CSS
                            </Label>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "JavaScript"
                                    onChange = { this.handleChange }
                                    />{' '}
                                JavaScript
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
          </div>
      </React.Fragment>
    )
  }
}
export default Filter

