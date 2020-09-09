class MemberController < ApplicationController
    def index
        members = Member.all
        render json: members
    end    
end
