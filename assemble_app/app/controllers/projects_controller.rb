class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects
    end

    def create
        project = Project.create(project_params)
        if project.valid?
            render json: project
        else
            render json: project.errors, status: :unprocessable_entity
        end
    end

    private
    def project_params
        params.require(:project).permit(:name, :description)
    end

end
