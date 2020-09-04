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
      projectsToBeShown: [],
      currentFiltersSelected: [],
    }
  }

  updateCurrentFiltersSelected = (filterOption) => {
    //Check to see if the filterOption is in the curentFiltersSelected
    //If filterOption is not in state already, create a new array that adds the filterOption, and upstate
    if (currentFiltersSelected.includes(filterOption)) {
      //Declare an array of filters that we can alter
      let newCurrentFiltersSelectedArray = this.state.currentFiltersSelected;
      //Delcare a variable for the index of filter options for readability
      let filterIndex = newCurrentFiltersSelectedArray.indexOf(filterOption);
      //Splice the selected options from the filtersArray
      newCurrentFiltersSelectedArray.splice(filterIndex, 1); 
      //setState to the updated array
      this.setState( {currentFiltersSelected: newCurrentFiltersSelectedArray})
    //If it is, create a new array that is a copy of the old state, minus the filteredOption
    } else {
        //Declare an array of filters that we can alter
        let newCurrentFiltersSelectedArray = this.state.currentFiltersSelected;
        //Splice the selected options from the filtersArray
        newCurrentFiltersSelectedArray.push(filterOption);
        //setState to the updated array
        this.setState( {currentFiltersSelected: newCurrentFiltersSelectedArray});
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
                projects = { this.state.projects }
                projectsToBeShown = { this.state.projectsToBeShown }
                currentFiltersSelected = { this.state.currentFiltersSelected }
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
