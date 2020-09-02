class Project < ApplicationRecord
    has_many :members
    has_many :users, through: :members
    has_many :project_technologies
    has_many :technologies, through: :project_technologies
end
