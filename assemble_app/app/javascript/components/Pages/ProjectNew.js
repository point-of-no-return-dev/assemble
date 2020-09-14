import React from "react"
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
    CardText
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
        <br/><br/>
        <h1 id="h1-dark-blue">Create a Project</h1>
        <div id="form-container">
            <div>
                <Form>
                    <FormGroup>
                        <Label style={{fontWeight:"500"}} id="body-text">Project Name</Label>
                        <Input
                            type="text"
                            name="name"
                            onChange={ this.handleChangeForForm }
                            value={ this.state.form.name }
                            id="form-fields"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label style={{fontWeight:"500"}} id="body-text">Project Description</Label>
                        <br/>
                        {/* Code below allows for user field to have multiple lines */}
                        <textarea 
                            type="text"
                            name="description"
                            onChange={ this.handleChangeForForm }
                            value={ this.state.form.description }
                            id="form-fields"
                            cols="67" 
                            rows="6">
                        </textarea>
                    </FormGroup>
                </Form>
            </div>
        </div>
        
        {/* Filter */}
        <Label id="body-text" style={{display: "flex", justifyContent: "center", fontWeight:"500"}}>Choose the project technologies and work conditions:</Label>
        <div id="filter-container">
        
            <CardDeck id="filter-deck">
                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Front-end</Label>
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
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "2"
                                    name= "CSS"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                CSS
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "3"
                                    name= "JavaScript"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                JavaScript
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "4"
                                    name= "jQuery"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                jQuery
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "5"
                                    name= "AngularJS"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                AngularJS
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "6"
                                    name= "React"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                React
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Back-end</Label>
                        <FormGroup check>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "7"
                                    name= "Ruby on Rails"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Ruby
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "8"
                                    name= "Python"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Rails
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "9"
                                    name= "Java"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                PHP
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "10"
                                    name= "PHP"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Rails
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "11"
                                    name= "C#"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                PHP
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "12"
                                    name= "Perl"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                PHP
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Testing</Label>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "13"
                                    name= "RSpec"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                RSpec
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "14"
                                    name= "Jest"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Jest
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "15"
                                    name= "JavaScript"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Enzyme
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck id="filter-deck">
                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Design</Label>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "16"
                                    name= "Adobe Illustrator"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Adobe Illustrator
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "17"
                                    name= "Adobe Photoshop"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Adobe Photoshop
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "18"
                                    name= "Sketch"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Sketch
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "19"
                                    name= "Invision"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Invision
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "20"
                                    name= "Figma"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Figma
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>
                
                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Database</Label>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "21"
                                    name= "Postman"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Postman
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "22"
                                    name= "PostgreSQL"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                PostgreSQL
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "23"
                                    name= "SQL"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                SQL
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "24"
                                    name= "Active Record"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Active Record
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card id="filter-card">
                    <CardBody id="filter-body-text">
                        <Label for="checkbox1" style={{fontWeight: "700", color: "#0f9fed", fontSize: ".95rem"}}>Conditions</Label>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "25"
                                    name= "Remote"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Remote
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "26"
                                    name= "Pair programming"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Pair programming
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "27"
                                    name= "Independent"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Independent
                            </Label>
                            <br/>
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "28"
                                    name= "Required meetings"
                                    onChange = { this.handleChangeForTechnologies }
                                />{' '}
                                Required meetings
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>
            </CardDeck>

                <div id="filter-btn">
                    <Button
                        name="submit"
                        color="secondary"
                        onClick={ this.handleSubmit }
                        id="primary-btn"
                    >
                    Create a Project
                    </Button>
                </div>
        </div>
                

        { this.state.success && <Redirect to="/index" />}
        </React.Fragment>
        )
    }
}
export default ProjectNew