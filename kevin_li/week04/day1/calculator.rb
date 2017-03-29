# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)


# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts 'Welcome to Kevin the Calculator.'

option = ''

until option == 8

  puts 'Please choose an option (input a number) from the following functions:'
  puts '1. +'
  puts '2. -'
  puts '3. *'
  puts '4. /'
  puts '5. ^'
  puts '6. √'
  puts '7. Mortgage Calculation'
  puts '8. Exit'

  option = gets.chomp.to_i

  if option == 8
    system('clear')
    puts "********************"
    puts "Thank you for using."
    puts "********************"

  elsif option < 6
    system('clear')
    puts "Please input the first number."
    input1 = gets.chomp.to_i
    puts "Please input the second number."
    input2 = gets.chomp.to_i

  elsif option == 6
    system('clear')
    puts "Please input a number."
    input3 = gets.chomp.to_i

  elsif option == 7
    system('clear')
    puts "Please input the principal."
    input4 = gets.chomp.to_f
    puts "Please input the annual interest rate in decimal."
    input5 = gets.chomp.to_f
    puts "Please input the number of monthly payments."
    input6 = gets.chomp.to_f

  else
    system('clear')
    puts "********************"
    puts 'Invalid input.'
    puts "********************"

  end

  case option

  when 1
    puts "********************"
    puts "The result is #{input1 + input2}."
    puts "********************"

  when 2
    puts "********************"
    puts "The result is #{input1 - input2}."
    puts "********************"

  when 3
    puts "********************"
    puts "The result is #{input1 * input2}."
    puts "********************"

  when 4
    puts "********************"
    puts "The result is #{input1 / input2}."
    puts "********************"

  when 5
    puts "********************"
    puts "The result is #{input1 ** input2}."
    puts "********************"

  when 6
    puts "********************"
    puts "The result is #{Math.sqrt(input3)}."
    puts "********************"

  when 7
    puts "********************"
    puts "The monthly payment is $#{(input4 * ((input5 / 12) * ((1 + (input5 / 12)) ** input6)) / (((1 + (input5 / 12)) ** input6) - 1)).round(2)}."
    puts "********************"

    # M = P * r(1+r)^n / (1+r)^n - 1

  end

end
