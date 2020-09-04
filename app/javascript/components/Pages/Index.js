import React, {Component} from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Index extends Component {
    render() {
        return(
            <React.Fragment>
                <h3>All the Projects</h3>
                <Row id="cards">

                    {/* If there are no filters selected, render all the Projects */}
                    {this.props.currentFiltersSelected.length === 0 && 
                    <>
                        {this.props.projects.map((project, index) => {
                            return (
                            <Col sm="4" key={ index }>
                                <Card body>
                                <CardTitle>
                                    <h5>{ project.name }</h5>
                                    <h5>{ project.description }</h5>
                                    <p>
                                    <NavLink to={`/project_show/${project.id}`}>
                                        <Button color="secondary">
                                        Show Page
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
                                <Card body>
                                <CardTitle>
                                    <h5>{ project.name }</h5>
                                    <h5>{ project.description }</h5>
                                    <p>
                                    <NavLink to={`/project_show/${project.id}`}>
                                        <Button color="secondary">
                                        Show Page
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