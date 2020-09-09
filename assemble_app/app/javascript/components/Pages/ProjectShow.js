import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class ProjectShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOwnerViewing: this.props.isCurrentUserTheOwner(this.props.project),
            isDeleted: false
        }
    }

    onClick = () => {
        var shouldDelete = confirm('Do you really want to delete this project? This will remove other members from the project as well and your data will be lost.');
        if (shouldDelete) {
            this.props.deleteProject(this.props.project, this.props.project.id);
            this.setState( {isDeleted: true} );
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
                    <Button 
                        className='delete-button' 
                        onClick = {this.onClick}
                    >
                        Delete
                    </Button>
                </>
                }

                {/* Redirect oif the user deletes the project */}
                {this.state.isDeleted && <Redirect to="/index" />}
            </React.Fragment>
        )
    }
}
export default ProjectShow