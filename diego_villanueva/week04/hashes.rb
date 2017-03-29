# https://gist.github.com/ga-wolf/32c78047b33c41d290d96762944b89cc

# A.
# a = ["Anil", "Erik", "Jonathan"]
# p a[1]
# a.push("Diego")
# p a

# B.
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# p h[1]
# p h[:two]
# p h["two"]
# h[3] = "Three"
# p h
# h[:four] = 4
# p h

# C.
# is = {true => "It's true!", false => "It's false"}
# p is[2+2 == 4]?

#
# # #D
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
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
p users["Erik"][:favorite_numbers]


# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].sort.first

# How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select {|el| el.even?}

# How would you return an array of the favorite numbers common to all users?
fav_nums =  users.map {|k,v| v[:favorite_numbers]}

fav_nums.each{|array|}
p fav_nums
