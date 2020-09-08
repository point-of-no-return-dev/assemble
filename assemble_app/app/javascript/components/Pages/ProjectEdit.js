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
            currentProject: this.props.project.id,
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
        this.props.editProject(this.state.form, this.state.currentProject)
        this.setState({ success: true })
    }

    render() {
        return(
            <React.Fragment>
                <div className="body-container">
                    <div className="form">
                        <Form>
                            <FormGroup>
                                <Label>Project Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.name }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Project Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.description }
                                />
                            </FormGroup>
                            <Button
                                name="submit"
                                color="secondary"
                                onClick={ this.handleSubmit }
                            >
                                Submit Edit
                            </Button>
                        </Form>
                    </div>
                </div>

                { this.state.success && <Redirect to="/index" />}
            </React.Fragment>
        )
    }
}
export default ProjectEdit