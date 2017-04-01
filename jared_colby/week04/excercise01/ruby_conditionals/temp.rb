puts "What temperature is it?"

temp = gets.chomp.to_i

puts "is the A/C working?"

ac = gets.chomp

puts "What temperature would you like?"

new_temp = gets.chomp.to_i


puts "turn on the air!"if ac == "yes" && temp > new_temp
puts "fix the ac it's hot!" if ac == "no" && temp > new_temp
puts "all good fix the ac later" if ac == "no" && temp < new_temp
