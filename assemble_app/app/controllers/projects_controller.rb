class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: apartments
    end



end
