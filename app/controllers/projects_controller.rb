class ProjectsController < ApplicationController
    
    def index
        projects = Project.all
        render json: projects
    end
    
    def create
        project = Project.create(project_params["project"])
        if project.valid?
            Member.create(user_id: current_user.id, project_id: project.id, is_owner: true)
            project_params["projectTechnologies"].each do |attribute| 
                ProjectTechnology.create(project_id: project.id, technology_id: attribute)
            end

            render json: project
        else
            render json: project.errors, status: :unprocessable_entity
        end
        
        
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        if project.valid?
            render json: project
        else
            render json: project.errors
        end
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
        if project.valid?
            render json: project
        else
            render json: project.errors
        end
    end

    private
    def project_params
        params.permit(:project =>[:name, :description], :projectTechnologies => [])
    end
end
