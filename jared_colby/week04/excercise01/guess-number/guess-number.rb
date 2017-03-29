number = Random.rand(0..10)
answer = -1
puts "Guess a number between 0 and 10"

while answer != number
  puts "guess again"
  answer = gets.chomp.to_i
end

  puts "thats correct!"
  puts "it was #{number}"
