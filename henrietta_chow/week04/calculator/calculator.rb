selection = -1 #need a selection value in order for the loop to commence

while selection != 10
  puts "Choose which operation you want:"
  puts "1. +"
  puts "2. -"
  puts "3. *"
  puts "4. /"
  puts "5. **"
  puts "6. Sqrt"
  puts "7. Mortgage Calculator"
  puts "8. BMI Calculator"
  puts "9. Trip Calculator"
  puts "10. Quit"

  selection = gets.chomp.to_i

  if selection <= 5
    puts "Enter your first number:"
    first_num = gets.chomp.to_i

    puts "Enter your second number:"
    second_num = gets.chomp.to_i

  elsif selection == 6
    puts "Enter your first number:"
    first_num = gets.chomp.to_i

  elsif selection == 7
    puts "Enter your loan amount:"
    loan_amount = gets.chomp.to_i

    puts "Enter your annual interest rate:"
    interest = gets.to_f

    puts "Enter your loan period:"
    loan_period = gets.chomp.to_i

  elsif selection == 8
    puts "Enter your weight in kg:"
    weight = gets.to_f #.chomp removed the last digit with .to_i rounding the number to an integer, hence used .to_f to get all decimals entered

    puts "Enter your height in mtr:"
    height = gets.to_f

  elsif selection == 9
    puts "Enter your distance in km:"
    distance = gets.to_f

    puts "Enter the km per litre:"
    km_litre = gets.to_f

    puts "Enter the price per litre:"
    price = gets.to_f

    puts "Enter the speed in km per hour:"
    speed = gets.to_f

  # elsif selection == 8 -> can break the loop here or at then end based on the when selection
  #   puts "See you next time!"
  #   break
  end

  def print_result ()
    puts "*******************************"
    puts "\t\tResult"
    puts "*******************************"
  end

  def add (first_num, second_num)
    first_num + second_num
  end

  def subtract (first_num, second_num)
    result = first_num - second_num
  end

  def multiply (first_num, second_num)
    result = first_num * second_num
  end

  def divide (first_num, second_num)
    result = first_num.fdiv(second_num)
  end

  def exponent (first_num, second_num)
    result = '%.2f'%(first_num ** second_num) #used to round up / show 2 decimal places / .round
  end

  def sqrt (first_num)
    result = Math.sqrt(first_num)
  end

  def monthly_repayment (loan_amount, interest, loan_period)
    number_repayments = multiply loan_period, 12 #divide by 12 for monthly payments
    monthly_interest = divide interest, 1200 #change from percentage to decimal and then divide by 12 months
    result = '%.2f'%(multiply (divide loan_amount, number_repayments), (add monthly_interest, 1))
  end

  def bmi (weight, height) #formula is weight divided by height, then divided by height again
    result = '%.2f'%(divide (divide weight, height), height)
  end

  def trip_calculator (distance, km_litre, price, speed)
    trip_time = divide distance, speed
    req_litres = divide distance, km_litre
    trip_cost = multiply req_litres, price
    result = [trip_time, trip_cost] #a, b = trip_time, trip_cost
  end

  case selection
  when 1
    print_result
    puts add first_num, second_num

  when 2
    print_result
    puts subtract first_num, second_num

  when 3
    print_result
    puts multiply first_num, second_num

  when 4
    print_result
    puts divide first_num, second_num

  when 5
    print_result
    puts exponent first_num, second_num

  when 6
    print_result
    puts sqrt first_num

  when 7
    print_result
    puts monthly_repayment loan_amount, interest, loan_period

  when 8
    print_result
    puts bmi weight, height

  when 9
    print_result
    result = trip_calculator distance, km_litre, price, speed
    puts "It will take you #{result[0]} hours, and cost $#{result[1]}" #refer to the result array to extract the info required

  when 10
    puts "See you next time!"
    break

  end
end
