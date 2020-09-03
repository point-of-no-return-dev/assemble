# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = [
    {
        email: "test@test.com",
        password: "123456",
        password_confirmation: "123456"
        first_name:
    }
]

user.each do |attribute|
    User.create attribute
end

apartments = [
    {
        street: "3946 Camino Lindo",
        city: "San Diego",
        state: "CA",
        manager: "Joe",
        email: "joe@test.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes"

    },
    {
        street: "2468 Whodoweappreciate Ln.",
        city: "San Diego",
        state: "CA",
        manager: "Tom Bumbadill",
        email: "tom.bumbadill@test.com",
        price: "9001",
        bedrooms: 2,
        bathrooms: 2,
        pets: "Yes"
    },
    {
        street: "123 Hill St.",
        city: "Los Angeles",
        state: "CA",
        manager: "Tom Bumbadill",
        email: "tom.bumbadill@test.com",
        price: "350",
        bedrooms: 2,
        bathrooms: 2,
        pets: "Yes"
    },
    {
        street: "2120 Governor Dr.",
        city: "San Diego",
        state: "CA",
        manager: "Tom Bumbadill",
        email: "tom.bumbadill@test.com",
        price: "1200",
        bedrooms: 3,
        bathrooms: 2,
        pets: "No"
    }
]

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
end