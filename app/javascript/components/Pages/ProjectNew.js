import React, {Component} from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap';
  import { Redirect } from 'react-router-dom';



class ProjectNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
                name: "",
                description: ""
            }
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
      }

    render() {
        return(
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label>Project Name</Label>
                        <Input
                        type="text"
                        name="street"
                        onChange={ this.handleChange }
                        value={ this.state.form.street }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Project Description</Label>
                        <Input
                        type="text"
                        name="city"
                        onChange={ this.handleChange }
                        value={ this.state.form.city }
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
            </React.Fragment>
        )
    }
}
export default ProjectNew