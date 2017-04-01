
# Vanilla, Non-Object-Oriented solution

strand_one = "GAGCCTACTAACGGGAT"
strand_two = "CATCGTAATGACGGCCT"

difference = 0

# Turn the first string into an array and then iterate over each element in that array, passing both the element (elem) and its index (i) into the block.
strand_one.chars.each_with_index do |elem, i|

  if elem != strand_two[i]
    difference += 1
  end

end

puts "The hamming distance between #{strand_one} and #{strand_two} is: #{difference}"



#  OO Solution, using attr_accessor
# This approach allows us to get and the DNA strands outside the class itself. This approach is necessary if we want to be able to instantiate the object without setting the values at the same time, or set the values after instantiation, or get the values after instantiation.

class DNA

  attr_accessor :strand_one, :strand_two

  # Remember the above is equivalent to:
  # def strand_one=(val)   #setter
  #   @strand_one = val
  # end
  #
  # def strand_one #getter
  #   @strand_one # implicit return
  # end
  #
  # ... and the same for strand_two


  # def initialize(str1, str2)
  #   @strand_one = str1
  #   @strand_two = str2
  # end

  def hamming_distance
    difference = 0

    # Use an array to keep track of where the mutations occur, for printing
    # The first argument is the length of the new array
    # Note that we need to set the initial value of each element to the space character ' '
    #  - this is so when we print it below our DNA strings, it aligns correctly beneath them
    positions = Array.new(@strand_one.length, ' ')

    @strand_one.chars.each_with_index do |base, i|
      if base != @strand_two[i]
        difference += 1
        positions[i] = '^'   # set the corresponding element in our array to mark the differing positions
      end
    end

    puts "The hamming distance between #{@strand_one} and #{@strand_two} is: #{difference}"
    puts @strand_one
    puts @strand_two
    puts positions.join
  end

end # class DNA



d = DNA.new  # create a new object which is an instance of our DNA class

# Set the values for both of our DNA input strings
# Note that this method requires that we know the name of both the class' internal instance variables

d.strand_one = "CATCGTAATGACGGCCT"
d.strand_two = "GAGCCTACTAACGGGAT"


# Now we're ready to run the method that compares the strings. Note that this method just assumes
# that the DNA string instance variables @strand_one and @strand_two have already been set!
# This is perhaps too much to assume!

d.hamming_distance






#  OO Solution, using an 'initialize' constuctor method
# This approach allows us to set the instance variables @strand_one and @strand_two when instantiating a new object of the DNA class, but it (1) requires us to know and pass in those two values when creating the object; (2) does not allow us to get or set those values outside the class itself (to do this, we would need to _also_ add attr_accessors for the values).

class DNA

  def initialize(str1, str2)
    # Set both instance variables from arguments provided via "DNA.new(arg1, arg2)" call
    @strand_one = str1
    @strand_two = str2
  end

  def hamming_distance
    difference = 0

    positions = Array.new(@strand_one.length, ' ')

    @strand_one.chars.each_with_index do |base, i|
      if base != @strand_two[i]
        difference += 1
        positions[i] = '^'
      end
    end

    puts "The hamming distance between #{@strand_one} and #{@strand_two} is: #{difference}"
    puts @strand_one
    puts @strand_two
    puts positions.join
  end

end # class DNA

# Make a new object from our DNA class, and initialize it with our two DNA strings
d = DNA.new("CATCGTAATGACGGCCT", "GAGCCTACTAACGGGAT")
d.hamming_distance
