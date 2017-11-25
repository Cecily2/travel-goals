# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Cecily", email: "cecily@email.com", password: "password")

trip1 = Trip.create(location: "Italy", notes: "It's going to be really beautiful", date: "2018", user: user1)

trip2 = Trip.create(location: "Iceland", notes: "So much ice!", date: "2019", user: user1)

trip3 = Trip.create(location: "Switzerland", notes: "Mountain climbing", date: "2019", user: user1)
