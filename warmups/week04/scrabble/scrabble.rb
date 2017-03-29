
# Creating global variables in Ruby isn't as trivial a matter as it is in JavaScript. So how can we store a hash of the values outside of our score method without declaring the hash inside the score method itself? One way is to store the hash inside a method - because methods ARE global in Ruby, you can 'see' all methods from inside other methods.
# Leveraging Ruby's implicit return, if we just dump a hash inside a method, calling that method will return the hash.
def scores
  {
  'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
  'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
  's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
  'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
  'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
  'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
  'q' => 10, 'z' => 10
  }
end

# This randomize method takes a single argument. I'm putting this in a method so that I can re-use it for both letter and word scores, and both double and triple scores.
def special_score( val )
  random = Random.rand( 10 )   #   Javascript equivalent: Math.floor( Math.random() * 10 )
  if random < 3  # one-in-three chance
    val *= 2
  elsif random == 9  # one-in-ten chance
    val *= 3
  end
  val
end

def get_score( word )
   # Start out with a sum of zero. We'll increment this by the value of the tile on each iteration, plus a random
  sum = 0
  word.downcase.chars.each do |letter|
    # For each letter, look up the score for the letter in our scores hash
    # Then we pass that score value into our special_score() function, which might double or triple it,
    # or might just return the same value unchanged
    sum += special_score( scores[letter] )
  end
  # Before returning the final score, we pass the vaue again into our special_score() function, to get a potential "double/triple" score for the whole word
  special_score( sum )
end

puts get_score( "cabbage" )
