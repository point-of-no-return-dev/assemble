import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class ProjectShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOwnerViewing: this.props.isCurrentUserTheOwner(this.props.project)
        }
    }
    render() {
        console.log(this.props.isCurrentUserTheOwner(this.props.project))
        // deconstructs projects so I don't have to type out the entire dot syntax for it every time.
        let { project } = this.props
        return(    
            <React.Fragment>
                <h2>{ project.name }</h2>
                <h5>Project Description:</h5>
                <p>{ project.description }</p>

                {/* If the current user is the project owner, then the eti and delete buttons will be shown. */}
                { this.state.isOwnerViewing &&
                <>
                    <NavLink to={`/project_edit/${project.id}`}>
                        <Button color='secondary'>
                            Edit
                        </Button>
                    </NavLink>
                </>
                }
            </React.Fragment>
        )
    }
}
export default ProjectShow