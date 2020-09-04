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
        return response.json()
      }
    })
      .then(projectArray => {
        this.setState({projects: projectArray})
      })
      .catch(errors => {
        console.log("index errors:", errors)
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
                current_user={current_user}
                // Update State
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