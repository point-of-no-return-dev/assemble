import React from "react"
import PropTypes from "prop-types"
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Filter from "./Components/Filter.js"
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
      technologies: [],
      projectsToBeShown: [],
      currentFiltersSelected: [],
      projectTechnologies: [],
      membersBelongingToCurrentUser: []
    }
  }

//   projectIDCompare = () => {
//     let techArr = tech.map(value => value.id)
//     let newArr = projTechArr.map(value => {
//         if(value.project_id === id){
//             return value.technology_id
//         }
//     })
//     // Gets rid of undefined values
//     let newTechArr = newArr.filter(value => {
//         return typeof value === "number"
//     })
//     let techIDs = techArr.filter(value => {
//         return newTechArr.includes(value)
//     })
//     return tech.map(value => {
//         if(techIDs.includes(value.id)){
//             return `${value.category}: ${value.name}`
//         }
//     })
// }

  isCurrentUserTheOwner = (project) => {
    console.log(this.state.membersBelongingToCurrentUser)
    console.log("I'm Running")
    let isTheOwner = false;
    this.state.membersBelongingToCurrentUser.forEach(member => {
      if (member.project_id === project.id && member.is_owner === true) {
        isTheOwner = true;
      } 
      return isTheOwner;
    })
    return isTheOwner;
  }

  updateMembersBelongingToCurrentUser = () => {
    //Get all of the members from the database
    fetch("/members")
    .then(response => {
      if(response.status === 200) {
        console.log("status:", response.status);
        return response.json()
      }
    })
      .then(membersArray => {
        let membersICareAbout = membersArray.filter(member => {
          return member.user_id == this.props.current_user.id
        })
        this.setState( {membersBelongingToCurrentUser: membersICareAbout} )
      })
      .catch(errors => {
        console.log("member errors:", errors)
      })
  }

  updateCurrentFiltersSelected = (filterOption) => {
    //Check to see if the filterOption is in the curentFiltersSelected
    //If it is, create a new array that is a copy of the old state, minus the filteredOption
    if (this.state.currentFiltersSelected.includes(parseInt(filterOption))) {
      //Declare an array of filters that we can alter
      let newCurrentFiltersSelectedArray = this.state.currentFiltersSelected;
      console.log("alterable array", newCurrentFiltersSelectedArray);
      //Delcare a variable for the index of filter options for readability
      let filterIndex = newCurrentFiltersSelectedArray.indexOf(parseInt(filterOption));
      console.log("filter index", filterIndex);
      //Splice the selected options from the filtersArray
      newCurrentFiltersSelectedArray.splice(filterIndex, 1); 
      console.log("after splice", newCurrentFiltersSelectedArray);
      //setState to the updated array
      this.setState( {currentFiltersSelected: newCurrentFiltersSelectedArray})
    //If filterOption is not in state already, create a new array that adds the filterOption, and upstate
    } else {
        //Declare an array of filters that we can alter
        let newCurrentFiltersSelectedArray = this.state.currentFiltersSelected;
        console.log("hey i'm else");
        //Splice the selected options from the filtersArray
        newCurrentFiltersSelectedArray.push(parseInt(filterOption));
        //setState to the updated array
        this.setState( {currentFiltersSelected: newCurrentFiltersSelectedArray});
    }
    this.compareWithTech()
  }
   
  // This method compares currentFiltersSelected with the Table project_technologies 
  // currentFiltersSelected, projectTechnologies
  compareWithTech = () =>{
    // Compare values in currentFiltersSelected with technology_id of project_technologies
    // Returning filtered values that match each other based on value.technology_id array and the currentFiltersSelected array
    console.log(this.state.projectTechnologies);
    let compareArr = this.state.projectTechnologies.filter(value => {
        return (this.state.currentFiltersSelected.includes(value.technology_id))
        }
    )
    // gives us an array of ID's to find the projects we want shown
    let projectsToBeShownIds = compareArr.map(value => {
        return value.project_id
    })
    // filters through all our projects and grabs all the projects with matching ID's in our projectsToBeShownIds array 
    let newIndex = this.state.projects.filter(value => {
      return (projectsToBeShownIds.includes(value.id))
    })
    this.setState( {projectsToBeShown: newIndex} );
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
    this.getProjectTechnologies()
    // this.getTechnologies()
    this.updateMembersBelongingToCurrentUser()
  }

  // ********** CRUD METHODS FOR PROJECT TABLE ********** //
  createNewProject = (project, projectTechnologies) => {
    return fetch("/projects", {
      // converting an object to a string
      body: JSON.stringify({project, projectTechnologies}),
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
        console.log("create_project status:", response.status);
      }
      return response
    })
    .catch(errors => {
      console.log("create_project errors:", errors)
    })
  }

  
  editProject = (project, projectID) => {
    return fetch(`/projects/${projectID}`, {
      // converting an object to a string
      body: JSON.stringify(project),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then(response => {
      console.log(response.status)
      // if the response is good  - reload the cats
      if(response.status === 200){
        this.componentDidMount()
        console.log("edit status:", response.status);
      }
      return response
    })
    .catch(errors => {
      console.log("edit errors:", errors)
    })
  }
  
  deleteProject = (project, projectID) => {
    fetch(`/projects/${projectID}`, {
      // converting an object to a string
      body: JSON.stringify(project),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "DELETE"
    })
    .then(response => {
      console.log(response.status)
      // if the response is good  - reload the cats
      if(response.status === 200){
        this.componentDidMount()
        console.log("delete status:", response.status);
      }
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }
  // ********** CRUD METHODS FOR MEMBER TABLE ********** //
  createNewMember = (member) => {
    return fetch("/members", {
      // converting an object to a string
      body: JSON.stringify(member),
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
        console.log("create_member status:", response.status);
      }
      return response
    })
    .catch(errors => {
      console.log("create_member errors:", errors)
    })
  }

  // ********** CRUD METHODS FOR PROJECT-TECHNOLOGY TABLE ********** //
  getProjectTechnologies = () => {
    fetch("/project_technologies")
    .then(response =>{
      if(response.status === 200){
        return response.json()
      }
    })
    .then(projectTechArr =>{
      this.setState({projectTechnologies: projectTechArr})
    })
    .catch(errors => {
      console.log("Project Technologies errors:", errors);
    })
  }



  // Gets an array of all technologies
  getTechnologies = () => {
    fetch("/technologies")
    .then(response =>{
      if(response.status === 200){
        return response.json()
      }
    })
    .then(techArr =>{
      this.setState({technologies: techArr})
    })
    .catch(errors => {
      console.log("Technologies errors:", errors);
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
    console.log("tech:", this.state.technologies);
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
                updateCurrentFiltersSelected = { this.updateCurrentFiltersSelected }
                currentFiltersSelected = { this.state.currentFiltersSelected }
                projects = { this.state.projects }
                projectsToBeShown = { this.state.projectsToBeShown }
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
              let technology = this.state.technologies.find(technology => technologies.id === parseInt(id))
              return (
                <ProjectShow 
                  project = {project}
                  technology = {technology}
                  current_user={current_user}
                  isCurrentUserTheOwner = {this.isCurrentUserTheOwner}
                  deleteProject = {this.deleteProject}
                  projectIDCompare = {this.projectIDCompare}
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
                <ProjectEdit 
                  project = {project}
                  editProject = {this.editProject}
                />
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

