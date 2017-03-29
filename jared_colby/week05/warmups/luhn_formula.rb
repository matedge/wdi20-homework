# class Luhn
#   def self.checksum(number)
#     digits = number.to_s.reverse.scan(/\d/).map { |x| x.to_i }
#     digits = digits.each_with_index.map { |d, i|
#       d *= 2 if i.even?
#       d > 9 ? d - 9 : d
#     }
#     sum = digits.inject(0) { |m, x| m + x }
#     mod = 10 - sum % 10
#     mod==10 ? 0 : mod
#   end
# end


def luhn(number)
  number
    .chars       # Break into individual digits
    .map(&:to_i) # map each character by calling #to_i on it
    .reverse     # Start from the end
    .map.with_index { |x, i| i.odd? ? x * 2 : x } # Double every other digit
    .map { |x| x > 9 ? x - 9 : x }  # If > 9, subtract 9 (same as adding the digits)
    .inject(0, :+) % 10 == 0        # Check if multiple of 10
end

puts luhn("3554") # => false
puts luhn("8763") # => true
