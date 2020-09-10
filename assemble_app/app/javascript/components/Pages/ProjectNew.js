import React from "react"
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Col
  } from 'reactstrap';
  import { Redirect } from 'react-router-dom';



class ProjectNew extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                description: ""
            },
            currentTechnologiesSelected: [],
            success: false
        }
    }

    updateCurrentTechnologiesSelected = (technologyOption) => {
        //Check to see if the technologyOption is in the currentTechnologiesSelected
        //If it is, create a new array that is a copy of the old state, minus the technologyOption
        if (this.state.currentTechnologiesSelected.includes(parseInt(technologyOption))) {
          //Declare an array of filters that we can alter
          let newCurrentTechnologiesSelected = this.state.currentTechnologiesSelected;
          console.log("alterable array", newCurrentTechnologiesSelected);
          //Delcare a variable for the index of filter options for readability
          let filterIndex = newCurrentTechnologiesSelected.indexOf(parseInt(technologyOption));
          console.log("filter index", filterIndex);
          //Splice the selected options from the filtersArray
          newCurrentTechnologiesSelected.splice(filterIndex, 1); 
          console.log("after splice", newCurrentTechnologiesSelected);
          //setState to the updated array
          this.setState( {currentTechnologiesSelected: newCurrentTechnologiesSelected})
        //If filterOption is not in state already, create a new array that adds the filterOption, and upstate
        } else {
            //Declare an array of filters that we can alter
            let newCurrentTechnologiesSelected = this.state.currentTechnologiesSelected;
            console.log("hey i'm else");
            //Splice the selected options from the filtersArray
            newCurrentTechnologiesSelected.push(parseInt(technologyOption));
            //setState to the updated array
            this.setState( {currentTechnologiesSelected: newCurrentTechnologiesSelected});
        }
      }
    
    handleChangeForForm = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
    }

    handleChangeForTechnologies = (e) => {
        // destructuring form out of state
        // let { form } = this.state
        let technologyOption = e.target.value
        console.log("technologyOption:", technologyOption);
        // setting state to the updated form
        this.updateCurrentTechnologiesSelected(technologyOption)
        console.log("currentTechnologiesSelected", this.state.currentTechnologiesSelected);
    }

    handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        this.props.createNewProject(this.state.form, this.state.currentTechnologiesSelected)
        this.setState({ success: true })
    }

    render() {
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
                                        value= "1"
                                        name= "HTML"
                                        onChange = { this.handleChangeForTechnologies }
                                    />{' '}
                                    HTML
                                </Label>
                                <Label className="filter-label" check>
                                    <Input 
                                        type="checkbox" 
                                        id="checkbox1" 
                                        value= "2"
                                        name= "CSS"
                                        onChange = { this.handleChangeForTechnologies }
                                    />{' '}
                                    CSS
                                </Label>
                                <Label className="filter-label" check>
                                    <Input 
                                        type="checkbox" 
                                        id="checkbox1" 
                                        value= "3"
                                        name= "JavaScript"
                                        onChange = { this.handleChangeForTechnologies }
                                    />{' '}
                                    JavaScript
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                </div>

                <div className="body-container">
                    <div className="form">
                <br/><br/>
                <h1 id="h1-dark-blue">Create a Project</h1>
                <div id="form-container">
                    <div>
                        <Form>
                            <FormGroup>
                                <Label id="body-text">Project Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={ this.handleChangeForForm }
                                    value={ this.state.form.name }
                                    id="form-fields"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label id="body-text">Project Description</Label>
                            {/* Previous Input field */}
                                {/* <Input
                                    type="text"
                                    name="description"
                                    onChange={ this.handleChangeForForm }
                                    value={ this.state.form.description }
                                    id="form-fields"
                                /> */}
                                <br/>
                            {/* Code below allows for user field to have multiple lines */}
                                <textarea 
                                    type="text"
                                    name="description"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.description }
                                    id="form-fields"
                                    cols="40" 
                                    rows="6">
                                </textarea>
                            </FormGroup>
                            <Button
                                name="submit"
                                color="secondary"
                                onClick={ this.handleSubmit }
                                id="primary-btn"
                            >
                                Create a Project
                            </Button>
                        </Form>
                    </div>
                </div>

                { this.state.success && <Redirect to="/index" />}
            </React.Fragment>
        )
    }
}
export default ProjectNew