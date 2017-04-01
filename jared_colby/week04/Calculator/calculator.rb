
input = -1
while input != "q"

  puts "please choose calculator:"
  puts "1. Math Calculator"
  puts "2. Mortage Calulator"
  puts "3. BMI Calculator"
  puts "4. Trip Calculator"
  puts "q. quit"

  input = gets.chomp
  
system("clear")

  case input

  when "1"
    load('./math.rb')

  when "2"
    load('./mortgage.rb')

  when "3"
    load('./bmi.rb')

  when "4"
    load('./trip.rb')

  when "q"
    break
  else
    puts "invalid option"

  end
end
