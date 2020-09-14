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
        console.log("currentFiltersSelected:", this.props.currentFiltersSelected);
    }

  render(){
    return(
      <React.Fragment>     
        {/* Filter */}
        <br/><br/>
        <h1 id="h1-dark-blue">View and select projects</h1>
        {/* <p id="body-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc.</p> */}
        <div id="filter-container-index">
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
                                />{' '}
                                Ruby on Rails
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "8"
                                    name= "Python"
                                    onChange = {  this.handleChange }
                                />{' '}
                                Python
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "9"
                                    name= "Java"
                                    onChange = {  this.handleChange }
                                />{' '}
                                Java
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "10"
                                    name= "PHP"
                                    onChange = {  this.handleChange }
                                />{' '}
                                PHP
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "11"
                                    name= "C#"
                                    onChange = {  this.handleChange }
                                />{' '}
                                C#
                            </Label>
                            <br/>
                            <Label className="filter-label" check>
                                <Input 
                                    type="checkbox" 
                                    id="checkbox1" 
                                    value= "12"
                                    name= "Perl"
                                    onChange = {  this.handleChange }
                                />{' '}
                                Perl
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
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
                                    onChange = {  this.handleChange }
                                />{' '}
                                Required meetings
                            </Label>
                        </FormGroup>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>




      </React.Fragment>
    )
  }
}
export default Filter

