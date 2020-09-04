import React, {Component} from 'react'
class ProjectShow extends Component {
    render() {
        // deconstructs projects so I don't have to type out the entire dot syntax for it every time.
        let { project } = this.props
        return(
            <React.Fragment>
                <h2>{ project.name }</h2>
                <h5>Project Description:</h5>
                <p>{ project.description }</p>

            </React.Fragment>
        )
    }
}
export default ProjectShow