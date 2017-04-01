input = -1
while input != "q"

puts "please choose operation:"
puts "1. +"
puts "2. -"
puts "3. *"
puts "4. /"
puts "5. Exponents"
puts "6. Square Root"
puts "q. Quit"

input = gets.chomp

system("clear")

def num_1
  puts "please enter first number"
  gets.chomp.to_i
end

def num_2
  puts "please enter next number"
  gets.chomp.to_i
end

def exponent
  puts "please enter exponent value"
  gets.chomp.to_i
end

case input

when "1"
  answer = num_1() + num_2()
 puts "the result is #{answer}"
when "2"
  answer = num_1() - num_2()
  puts "the result is #{answer}"
when "3"
 answer = num_1() * num_2()
 puts "the result is #{answer}"
when "4"
  answer = num_1() / num_2()
  puts "the result is #{answer}"
when "5"
  answer = num_1() ** exponent()
  puts "the result is #{answer}"
when "6"
  answer = Math.sqrt(num_1)
  puts "the result is #{answer}"

when "q"
  break
else
  puts "Invalid input"
end
end
