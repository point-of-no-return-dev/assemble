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
        // console.log(this.props.getProjectTechnologies());
        // deconstructs projects so I don't have to type out the entire dot syntax for it every time.
        let { project } = this.props
        return(    
            <React.Fragment>
                <br/><br/>
                {/* <p id="filter-body-text" style={{textAlign:"left", fontWeight: "700", color:"#0f9fed"}}>Project Name:</p> */}
                <h1 id="h1-dark-blue">{ project.name }</h1>
                <br/>
                <p id="filter-body-text" style={{textAlign:"center", fontWeight: "700", color:"#0f9fed"}}>Project Description:</p>
                <p id="filter-body-text" style={{textAlign:"center", width:"40%", margin:"auto"}}>{ project.description }</p>
                <br/><br/>
                {/* If the current user is the project owner, then the eti and delete buttons will be shown. */}
                { this.state.isOwnerViewing &&
                <>
                    <div id="center">
                        <NavLink to={`/project_edit/${project.id}`}>
                            <Button 
                                id="primary-btn"
                                style={{margin:"5px"}}
                            >Edit
                            </Button>
                        </NavLink>
                        <Button 
                            className='delete-button'
                            style={{margin:"5px"}}
                            id="secondary-btn"
                            onClick = {this.onClick}
                        >
                            Delete
                        </Button>
                    </div>
                </>
                }

                {/* Redirect oif the user deletes the project */}
                {this.state.isDeleted && <Redirect to="/index" />}
            </React.Fragment>
        )
    }
}
export default ProjectShow