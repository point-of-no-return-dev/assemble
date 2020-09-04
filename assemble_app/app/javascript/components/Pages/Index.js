import React, {Component} from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Index extends Component {
    render() {
        return(
            <React.Fragment>
                <h3>All the Projects</h3>
                <Row id="cards">
                    { this.props.projects.map((project, index) => {
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
                </Row>
            </React.Fragment>
        )
    }
}
export default Index