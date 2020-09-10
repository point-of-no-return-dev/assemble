class MemberController < ApplicationController
    def index
        members = Member.all
        render json: members
    end   
    
    def create
        member = Member.create(member_params)
        if project.valid?
            render json: project
        else
            render json: project.errors, status: :unprocessable_entity
        end
    end

    private
    def member_params
        params.require(:project).permit(:user_id, :project_id, :is_owner)
    end
end
