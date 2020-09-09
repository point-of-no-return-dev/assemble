class ProjectTechnology < ApplicationRecord
    belongs_to :technology, required: false
    belongs_to :project, required: false
end

