import React, {Component} from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Filter from '../Components/Filter.js'

class Index extends Component {
    render() {
        return(
            <React.Fragment>
                <Filter 
                    projects = { this.props.projects }
                    projectsToBeShown = { this.props.projectsToBeShown }
                    currentFiltersSelected = { this.props.currentFiltersSelected }
                    updateCurrentFiltersSelected = { this.props.updateCurrentFiltersSelected }
                    handleChange = { this.props.handleChange }
                />
                <Row id="filter-cards">
                    {/* If there are no filters selected, render all the Projects */}
                    {this.props.currentFiltersSelected.length === 0 && 
                    <>
                        {this.props.projects.map((project, index) => {
                            return (
                            <Col sm="4" key={ index }>
                                <Card id="filter-index-card" body>
                                <CardTitle>
                                    <h3 id="h3-filter-blue">{ project.name }</h3>
                                    <p id="body-text-index">{ project.description }</p>
                                    <p>
                                    <NavLink to={`/project_show/${project.id}`}>
                                        <Button 
                                            id="primary-btn"
                                        >Show Page
                                        </Button>
                                    </NavLink>
                                    </p>
                                </CardTitle>
                                </Card>
                            </Col>
                            )
                        })}
                    </>
                    }
                    {/* If there are filters selected, render this.props.projectsToBeShown */}
                    {this.props.currentFiltersSelected.length !== 0 && 
                    // Draw data from projectsToBeShown instead of projects from props
                    <>
                        {this.props.projectsToBeShown.map((project, index) => {
                            return (
                            <Col sm="4" key={ index }>
                                <Card id="filter-index-card" body>
                                <CardTitle>
                                    <h3 id="h3-filter-blue">{ project.name }</h3>
                                    <p id="body-text-index">{ project.description }</p>
                                    <p>
                                    <NavLink to={`/project_show/${project.id}`}>
                                        <Button 
                                            id="primary-btn"
                                        >Show Page
                                        </Button>
                                    </NavLink>
                                    </p>
                                </CardTitle>
                                </Card>
                            </Col>
                            )
                        })}
                    </>
                    }

                </Row>
            </React.Fragment>
        )
    }
}
export default Index