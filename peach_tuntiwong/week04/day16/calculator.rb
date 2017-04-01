def mainMenu
  # Print out options to choose
  puts "Choose from following options:"
  puts "1. +"
  puts "2. -"
  puts "3. *"
  puts "4. /"
  puts "5. Exponential"
  puts "6. Square Root"
  puts "7. Mortgage"
  puts "8. BMI"
  puts "9. Trip Calculator"

  mode = gets.chomp # Didn't convert number here, becasue input may be request for quit

  case mode

  when "1"
    inputs = get_inputs
    puts "The answer is #{inputs[0]+inputs[1]}"
    mainMenu

  when "2"
    inputs = get_inputs
    puts "The answer is #{inputs[0]-inputs[1]}"
    mainMenu

  when "3"
    inputs = get_inputs
    puts "The answer is #{inputs[0]*inputs[1]}"
    mainMenu

  when "4"
    inputs = get_inputs
    puts "The answer is #{inputs[0]/inputs[1]}"
    mainMenu

  when "5"
    inputs = get_inputs
    puts "The answer is #{inputs[0]**inputs[1]}"
    mainMenu

  when "6"
    puts "Enter the number"
    num = gets.chomp.to_i

    puts "The answer is #{Math.sqrt(num)}"
    mainMenu

  when "7"
    mortgage
    mainMenu

  when "8"
    calculateBMI
    mainMenu

  when "9"
    tripCost
    mainMenu

  when "quit", "q", "Quit"

  else
    puts "Invalid input!"
    mainMenu
  end
end

# Get two inputs from user for operation 1 to 5
def get_inputs
  puts "Enter first number"
  first = gets.chomp.to_i

  puts "Enter second number"
  second = gets.chomp.to_i

  # return array of inputs
  return first, second
end

# morgage calculator
def mortgage
  # Get required inputs
  puts "Enter principle"
  principle = gets.chomp.to_f
  puts "Enter monthly interest rate"
  interest = gets.chomp.to_f/100
  puts "Enter number of payments"
  numberOfPayments = gets.chomp.to_f

  # Calculation and printout
  monthly = principle*interest*((1+interest)**numberOfPayments)/(((1+interest)**numberOfPayments)-1)
  puts "Monthly payment is #{monthly.round(2)}"
end

def calculateBMI
  # Get required inputs
  puts "Enter your weight (kg)"
  weight = gets.chomp.to_f
  puts "Enter your height (cm)"
  height = gets.chomp.to_f/100
  userBMI = weight/height/height

  if userBMI < 18.5
    comment = "(Underweight)"
  elsif userBMI < 25
    comment = "(Normal weight)"
  elsif userBMI < 29
    comment = "(Overweight)"
  else
    comment = "(Obese)"
  end
  # Calculation and printout
  puts "Your BMI is #{userBMI.round(2)} #{comment}."
end

def tripCost
  # Get required inputs
  puts "Enter distance (km)"
  distance = gets.chomp.to_f
  puts "Enter consumption rate (km per gallon)"
  consumption = gets.chomp.to_f
  puts "Enter gas price ($ per gallon)"
  price = gets.chomp.to_f

  cost = price*distance/consumption
  # Calculation and printout
  puts "The cost of this trip is #{cost.round(2)}"
end

mainMenu
