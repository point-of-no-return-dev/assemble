import React from "react"
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
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
            success: false
        }
    }
    
    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        this.props.createNewProject(this.state.form)
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
                                <Label id="body-text">Project Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={ this.handleChange }
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
                                    onChange={ this.handleChange }
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