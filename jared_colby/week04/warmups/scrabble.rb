def letter_scores
  {
  'a' =>1, 'e' =>1, 'i' =>1, 'o' =>1,
  'u' =>1, 'l' =>1, 'n' =>1, 'r' =>1,
  's' =>1, 't' =>1, 'd' =>2, 'g' =>2,
  'b' =>3, 'c' =>3, 'm' =>3, 'p' =>3,
  'f' =>4, 'h' =>4, 'v' =>4, 'w' =>4,
  'y' =>4, 'k' =>5, 'j' =>8, 'x' =>8,
  'q' =>10,'z' =>10
  }
end

def special_score(val)
  random = Random.rand (10)
  if random < 3
    val *= 2
  elsif random == 9
    val *= 3
  end
  val
end

def get_score(word)
  sum = 0
  word.downcase.chars.each do |letter|
    sum += special_score letter_scores[letter]
  end
  special_score sum
end

puts get_score("cabbage")
