require('pry')
selection = -1

while selection != 10
  system("clear")
  puts "Choose and option:"
  puts " 1: +"
  puts " 2: -"
  puts " 3: x"
  puts " 4: /"
  puts " 5: exponent" 
  puts " 6: square root"
  puts " 7: mortgage calculator"
  puts " 8: BMI calculator"
  puts " 9: Trip calculator"
  puts " 10: Quit"
  selection = gets.chomp.to_i

  if selection == 10
    puts "See you !"
  elsif selection == 7
    system("clear")
    puts "Enter the Loan amount"
    loan = gets.chomp.to_f
    puts "Enter your annual interest rate"
    rate = gets.chomp.to_f/12/100
    puts  "Enter the loan period in months"
    repayments = gets.chomp.to_f
  elsif selection ==8
    system("clear")
    puts "What is you weight in kg?"
    weight = gets.chomp.to_f
    puts "What is your height in mts?"
    height = gets.chomp.to_f
  elsif selection == 9
    system("clear")
    puts "What's the distance of your trip in miles?"
    distance = gets.chomp.to_f
    puts "How many miles per galon?"
    miles_galon = gets.chomp.to_f
    puts "What's the price per galon?"
    price_galon = gets.chomp.to_f
    puts "What the speed in miles per hour?"
    speed  = gets.chomp.to_f

  else
    system("clear")
    puts "Enter the first number"
    num1 = gets.chomp.to_i
    if selection != 6   #square root needs only one number
      puts "Enter the second number"
      num2 = gets.chomp.to_i
    end
  end

    case selection
    when 1
      result = num1 + num2
    when 2
      result = num1 - num2
    when 3
      result = num1 * num2
    when 4
      result = num1 / num2
    when 5
      result = num1**num2
    when 6
      result = Math.sqrt(num1)
    when 7
      #  just figure out the monthly repayments after the deposit (amount owing divided my months of the loan term) and add an interest rate to that
      result = (loan/repayments) * (1+rate)
    when 8
      #BMI
binding.pry
      result = weight / height
      result = result / height
    when 9
      time = distance / speed
      cost = distance/ miles_galon * price_galon
      result = "The trip time is #{time} hours, the cost is $ #{cost}"


      #trip calculator
      # Calculate a trip time and cost given inputs for
      # distance
      # miles per gallon
      # price per gallon
      # speed in miles per hour


    else
      puts "Wrong option, select a number from 1 to 10 !"
    end
    system("clear")
    puts "****************"
    puts "Result: #{result}"
    puts "****************"
end
