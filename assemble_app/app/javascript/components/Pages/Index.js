import React, {Component} from 'react'
import Filter from "../Components/Filter.js"

class Index extends Component {
    render() {
        return(
            <React.Fragment>
                <h2>CREATE. FIND. ASSEMBLE.</h2>
                <h5>View projects below.</h5>
                <Filter />
            </React.Fragment>
        )
    }
}
export default Index