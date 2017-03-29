#calculator

calculators = ['1. +', '2. -', '3. *', '4. /', '5. Quit']

puts calculators

puts "Choose the operation "

choice = gets.chomp

puts "Enter first number"
num1 = gets.chomp.to_i

puts "enter second number"
num2 = gets.chomp.to_i

case choice
when "1" || "+"
  puts "************** Your Result **************"
  puts num1 + num2
  puts "*****************************************"

when "2" || "-"
  "************** Your Result **************"
  puts num1 - num2
  puts "*****************************************"

when "3" || "*"
  "************** Your Result **************"
  puts num1 * num2
  puts "*****************************************"

when "4" || "/"
  "************** Your Result **************"
  puts num1 / num2
  puts "*****************************************"
else
  puts "No more calculation"
end
