def raindrops(number)

str = ""

  str += "Pling" if number % 3 == 0
  str += "Plang" if number % 5 == 0
  str += "Plong" if number % 7 == 0

  return str unless str.empty?
  number.to_s
end

puts raindrops 34
