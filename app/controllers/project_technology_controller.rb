class ProjectTechnologyController < ApplicationController
    def index
        project_technologies = ProjectTechnology.all 
        render json: project_technologies
    end
end
