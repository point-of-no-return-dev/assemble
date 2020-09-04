import React from "react"
import PropTypes from "prop-types"
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Landing from "./Pages/Landing.js"
import Index from "./Pages/Index.js"
import ProjectNew from "./Pages/ProjectNew.js"
import ProjectShow from "./Pages/ProjectShow.js"
import ProjectEdit from "./Pages/ProjectEdit.js"
import AboutUs from "./Pages/AboutUs.js"
import NotFound from "./Pages/NotFound.js"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import mockApartments from './mockApartments.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    fetch("/projects")
    .then(response => {
      if(response.status === 200) {
        console.log("status:", response.status);
        return response.json()
      }
    })
      .then(projectArray => {
        this.setState({ projects: projectArray })
      })
      .catch(errors => {
        console.log("index errors:", errors)
      })
  }

  createNewProject = (project) => {
    return fetch("/projects", {
      // converting an object to a string
      body: JSON.stringify(project),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => {
      // if the response is good  - reload the cats
      if(response.status === 200){
        this.componentDidMount()
        console.log("create status:", response.status);
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    console.log("logged_in", logged_in);
    console.log(this.state.projects);
    return (
      <Router>
        <Header
          logged_in={ logged_in }
          sign_in_route={ sign_in_route }
          sign_out_route={ sign_out_route }
        />
        <Switch>
          <Route
            exact path="/"
            render={ (props) =>
              <Landing
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
          />

          <Route
            path="/index"
            render={ (props) =>
              <Index
                let projects = { this.state.projects }
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                // Update State
              />
            }
          />

          <Route
            path={"/project_show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let project = this.state.projects.find(project => project.id === parseInt(id))
              return (
                <ProjectShow 
                  project = {project}
                />
              )
            }}
          />
          
          <Route
            path={"/project_edit/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let project = this.state.projects.find(project => project.id === parseInt(id))
              return (
                <ProjectEdit project = {project}/>
              )
            }}
          />
          <Route
            path="/project_new"
            render={ (props) =>
              <ProjectNew
                //Make a createNewProject method to pass as a prop
                createNewProject={this.createNewProject}
                current_user={current_user}
              />
            }
          />
          <Route 
            path="/aboutus"
            render={ (props) =>
              <AboutUs/>
            }
          />
          <Route component={ NotFound }/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}


export default App

