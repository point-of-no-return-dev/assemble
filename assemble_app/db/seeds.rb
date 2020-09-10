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
    category: "Frontend",
    name:  "HTML"
   },
   {
    category: "Frontend",
    name:  "CSS"
   },
   {
    category: "Frontend",
    name:  "JavaScript"
    }
]

# Relationship for project_technologies, with projects and technologies
# Project 1 has HTML as a technology
ProjectTechnology.create project_id: 1, technology_id: 1
# Project 2 has CSS as a technology
ProjectTechnology.create project_id: 2, technology_id: 2
# Project 3 has JavaScript as a technology
ProjectTechnology.create project_id: 3, technology_id: 3

