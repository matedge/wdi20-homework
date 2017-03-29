puts "please choose from the following programs:"
puts "1. Drinking Age"
puts "2. Air Conditioning"
puts "3. Sydney Suburbs"

input = gets.chomp

case input

when "1"
  require('./eighteen.rb')
when "2"
  require('./temp.rb')
when "3"
  require('./sydney.rb')
else
  puts "Invalid input"
end
