import React, { Component } from 'react'
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Filter extends Component{
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

  render(){
    return(
      <React.Fragment>
          <div className="filter-container">
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

            </Form>
          </div>
      </React.Fragment>
    )
  }
}
export default Filter

