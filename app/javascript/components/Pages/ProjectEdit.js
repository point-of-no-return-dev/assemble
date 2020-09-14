import React, {Component} from "react"
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class ProjectEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: this.props.project.name,
                description: this.props.project.description
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
        this.props.editProject(this.state.form, this.props.project.id)
        this.setState({ success: true })
    }

    render() {
        return(
            <React.Fragment>
            <br/><br/>
             <h1 id="h1-dark-blue">Edit a Project</h1>
             <div id="form-container">
                    <div className="form">
                        <Form>
                            <FormGroup>
                            <Label style={{fontWeight:"500"}} id="body-text">Project Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.name }
                                    id="form-fields"
                                />
                            </FormGroup>
                            <FormGroup>
                            <Label style={{fontWeight:"500"}} id="body-text">Project Description</Label>
                            <br/>
                                <textarea 
                                    type="text"
                                    name="description"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.description }
                                    id="form-fields"
                                    cols="67" 
                                    rows="6">
                                </textarea>
                            </FormGroup>
                            <div id="filter-btn">
                                <Button
                                    name="submit"
                                    color="secondary"
                                    onClick={ this.handleSubmit }
                                    id="primary-btn"
                                >
                                    Submit Edit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                { this.state.success && <Redirect to="/index" />}
            </React.Fragment>
        )
    }
}
export default ProjectEdit
