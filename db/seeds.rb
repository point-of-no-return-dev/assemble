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
    }
]

#creates user object
user.each do |attribute|
    User.create attribute
end

#For projects table
projects = [
    {
        id: 1,
        name: "Assemble",
        description: "We ask that you know the difference between capital and lower case letters and when to use them."

    },
    {
        id: 2,
        name: "Pet Wellness App",
        description: "It's like a personal assistant for all of your pet needs."
    }
]

#Creates project objects
projects.each do |attribute|
    Project.create attribute
end

#For Member table
test_project1 = Project.first
test_project2 = Project.last

test_user = User.first

#Is this the right way to create Member objects??
Member.create user_id: test_user.id, project_id: test_project1.id, is_owner: true
Member.create user_id: test_user.id, project_id: test_project2.id, is_owner: true
