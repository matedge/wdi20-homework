
input = -1
while input != "q"

  puts "please choose option:"
  puts "1. Repayment calculator"
  puts "q. Quit"

  input = gets.chomp

  system("clear")

  def loan_amount
    puts "please enter loan amount"
    gets.chomp.to_i
  end

  def interest_rate
    puts "please input interest rate"
    gets.chomp.to_f* 0.01/12
  end

  def loan_term
    puts "please enter loan term"
    gets.chomp.to_i*12
  end

  case input

  when "1"
  amount = loan_amount
  rate = interest_rate
  term = loan_term

    answer = amount * rate/(1-( 1 + rate)**-term)
    puts "your monthly repayments will be: $#{answer.round(2)}"

  when "q"
    break
  else
    puts "Invalid input"



   end
 end
