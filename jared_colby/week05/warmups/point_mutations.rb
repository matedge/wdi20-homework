strand_one = "GAGCCTACTAACGGGAT"

strand_two = "CATCGTAATGACGGCCT"

#
# difference = 0
#
# strand_one.chars.each_with_index do |base, index|
#
#   if base!= strand_two[index]
#     difference += 1
#   end
# end
#
# puts "Hamming distance between #{strand_one} and #{strand_two} is: #{difference}"


class DNA

  attr_accessor :strand_one, :strand_two
  def initialize(str1,str2)
    @strand_one = str1
    @strand_two = str2
  end

  def hamming_distance
    difference = 0

    positions = Array.new(@strand_one.length, ' ')
    @strand_one.chars.each_with_index do |base, index|
    if base!= @strand_two[index]
      difference += 1
      positions[index] = '^'
    end
  end

puts "Hamming distance between #{@strand_one} and #{@strand_two} is: #{difference}"
