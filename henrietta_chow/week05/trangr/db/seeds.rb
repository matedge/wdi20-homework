# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Welcome to t a glorious seed script :)"
puts "We are working hard to make your day fantastic...."
countries = [
  {
    name: "Australia",
    cities: [{
        name: "Sydney",
        landmarks: ["Opera House", "Bondi Beach", "Manly", "Royal National Park", "Luna Park", "Star Casino"],
        activities: ["Dining", "Surfing", "Kitesurfing", "Windsurfing", "Sailing", "Bodysurfing", "Swimming"]
      },
      {
        name: "Brisneyland",
        landmarks: ["South Bank", "Kodka Beach", "Tresuary Casino", "Regatta Hotel", "Mt Cootha"],
        activities: ["Public Transport Riding", "Train Spotting", "Urban Surfing"]
      },
      {
        name: "Melbourne",
        landmarks: ["Yarra River", "MCG", "Fed Square", "Brunswick St", "Lygon St", "Chinatown", "Crown Casino", "NGV"],
        activities: ["Live Music", "Cycling", "Coffeeing", "Tram Riding/Dodging", "Footy"]
      }
    ]
  },
  {
    name: "America",
    cities: [
      {
        name: "New York",
        landmarks: ["Times Sqaure", "Empire State Building", "Central Park", "Brooklyn Bridge", "Harlem"],
        activities: ["Dining", "Theatre", "Shopping", "Concerts", "Baseball", "Helicopter Rides"]
      },
      {
        name: "Los Angeles",
        landmarks: ["Hollywood Sign", "Santa Monica", "Beverly Hills", "Rodeo Drive", "La Brea Tar Pits", "Lots of cars"],
        activities: ["Dining", "Theatre", "Shopping", "Concerts", "Baseball"]
      },
      {
        name: "San Francisco",
        landmarks: ["Golden Gate Bridge", "Halfmoon Bay", "Dolores Park", "Alcatraz", "Golden Gate Park", "Mission"],
        activities: ["Dining", "Surfing", "Shopping", "Concerts", "Baseball"]
      }
    ]
  }
]

countries.each do |country|
  new_country = Country.create(name: country[:name])
  country[:cities].each do |city|
    new_city = City.create(name: city[:name], country_id: new_country.id)

    city[:landmarks].each do |landmark|
      Landmark.create(name: landmark, city_id: new_city.id)
    end

    city[:activities].each do |activity_name|
      activity = Activity.find_or_create_by(name: activity_name)
      new_city.activities << activity
    end
  end
end
puts "Our job here is done. Have a fabulous afternoon"
