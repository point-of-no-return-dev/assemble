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
                                Create a Project
                            </Button>
                        </Form>
                    </div>
                </div>

                { this.state.success && <Redirect to="/" />}
            </React.Fragment>
        )
    }
}
export default ProjectNew