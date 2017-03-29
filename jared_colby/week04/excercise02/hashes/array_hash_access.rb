# a = ["Anil", "Erik", "Jonathan"]
#
# a.delete("Erik")
#
# a.insert(1, "Jared")
#
# puts a

#
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#
# # puts h[1]
# # puts h[:two]
# # puts h["two"]
#
# h[3] = "three"
#
# h[:four] = 4
#
# puts h



# is = {true => "It's true!", false => "It's false"}

# puts is[ 2 + 2 == 4] # It's true!
# puts is[ true ] #It's true!
# puts is[ "Erik" == "Jonathan"] #"It's false"
# puts is[9 > 10]#"It's false"
# puts is[0] # nil
# puts is["Erik"]# nil
# What is the return value of is[2 + 2 == 4]?
# What is the return value of is["Erik" == "Jonathan"]?
# What is the return value of is[9 > 10]?
# What is the return value of is[0]?
# What is the return value of is["Erik"]?




# D. Given the following data structure:
#
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# puts users["Jonathan"][:twitter]
# users["Jared"]= {:twitter => "jrad", :favorite_numbers => [34, 6, 17, 11,]}


# users["Erik"][:favorite_numbers]
# users["Erik"][:favorite_numbers].sort{|x,y| x <=> y}.shift
# users["Anil"][:favorite_numbers].select{|num| num % 2 == 0}

all_favorite_numbers = users.map {|k,v| v[:favorite_numbers]}

puts all_favorite_numbers
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
# How would you add the number 7 to Erik's favorite numbers?
# How would you add yourself to the users hash?
# How would you return the array of Erik's favorite numbers?
# How would you return the smallest of Erik's favorite numbers?
# How would you return an array of Anil's favorite numbers that are also even?
# How would you return an array of the favorite numbers common to all users?
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
