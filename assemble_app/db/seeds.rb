# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#For users table
user = [
    {
        id: 1,
        email: "test@test.com",
        password: "123456",
        password_confirmation: "123456",
        first_name: "Joe",
        last_name: "Shmo"
    },
    {
        id: 2,
        email: "test2@test2.com",
        password: "123456",
        password_confirmation: "123456",
        first_name: "Sam",
        last_name: "Williams"
    }
]

#creates user object
user.each do |attribute|
    User.create attribute
end

#For projects table
projects = [
    {
        name: "Assemble",
        description: "We ask that you know the difference between capital and lower case letters and when to use them."
    },
    {
        name: "Pet Wellness App",
        description: "It's like a personal assistant for all of your pet needs."
    },
    {
        name: "Fitness",
        description: "Working out is so much fun with this app. We need 2 developers to work on it."
    }
]

#Creates project objects
projects.each do |attribute|
    Project.create attribute
end

#For Member table
test_project1 = Project.first
test_project2 = Project.find(2)
test_project3 = Project.last

test_user = User.first
test_user2 = User.last

# Is this the right way to create Member objects??
# Test_user is an owner for both test_project1 and test_project2
Member.create user_id: test_user.id, project_id: test_project1.id, is_owner: true
Member.create user_id: test_user.id, project_id: test_project2.id, is_owner: true
# This makes test_user2 a member but not an owner of test_project1 and test_project2
Member.create user_id: test_user2.id, project_id: test_project1.id, is_owner: false
Member.create user_id: test_user2.id, project_id: test_project2.id, is_owner: false
# This makes test_user2 an owner of test_project3
Member.create user_id: test_user2.id, project_id: test_project3.id, is_owner: true


# Created technologies
technologies = [
   {
    # id: 1
    category: "Frontend",
    name:  "HTML"
    },
    {
    # id: 2
    category: "Frontend",
    name:  "CSS"
    },
    {
    # id: 3
    category: "Frontend",
    name:  "JavaScript"
    },
    {
    # id: 4
    category: "Frontend",
    name:  "jQuery"
    },
    {
    # id: 5
    category: "Frontend",
    name:  "AngularJS"
    },
    {
    # id: 6
    category: "Frontend",
    name:  "React"
    },
    {
    # id: 7
    category: "Back-end",
    name:  "Ruby on Rails"
    },
    {
     # id: 8
    category: "Back-end",
    name:  "Python"
    },
    {
    # id: 9
    category: "Back-end",
    name:  "Java"
    },
    {
    # id: 10
    category: "Back-end",
    name:  "PHP"
    },
    {
    # id: 11
    category: "Back-end",
    name:  "C#"
    },
    {
    # id: 12
    category: "Frontend",
    name:  "Perl"
    },
    {
    # id: 13
    category: "Testing",
    name:  "RSpec"
    },
    {
    # id: 14
        category: "Testing",
    name:  "Jest"
    },
    {
    # id: 15
    category: "Testing",
    name:  "Enzyme"
    },
    {
    # id: 16
    category: "Design",
    name:  "Adobe Illustrator"
    },
    {
    # id: 17
    category: "Design",
    name:  "Adobe Photoshop"
    },
    {
    # id: 18
    category: "Design",
    name:  "Sketch"
    },
    {
    # id: 19
    category: "Design",
    name:  "Invision"
    },
    {
    # id: 20
    category: "Design",
    name:  "Figma"
    },
    {
     # id: 21
    category: "Database",
    name:  "Postman"
    },
    {
    # id: 22
    category: "Database",
    name:  "PostgreSQL"
    },
    {
     # id: 23
    category: "Database",
    name:  "SQL"
    },
    {
    # id: 24
    category: "Database",
    name:  "Active Record"
    },
    {
    # id: 25
    category: "Conditions",
    name:  "Remote"
    },
    {
     # id: 26
    category: "Conditions",
    name:  "Pair programming"
    },
    {
    # id: 27
    category: "Conditions",
    name:  "Independent"
    },
    {
    # id: 28
    category: "Conditions",
    name:  "Required meetings"
    }
]

# Relationship for project_technologies, with projects and technologies
# Project 1 has HTML as a technology
ProjectTechnology.create project_id: 1, technology_id: 1
# Project 2 has CSS as a technology
ProjectTechnology.create project_id: 2, technology_id: 2
# Project 3 has JavaScript as a technology
ProjectTechnology.create project_id: 3, technology_id: 3

