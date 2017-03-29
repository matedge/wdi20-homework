def count_nucleotides(string)


  bases = {

    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0,
  }

  message = []

  string.upcase.chars.each do |letter|
    is_nucleotide = false

    unless bases[letter].nil?
      bases [letter] +=1
      is_nucleotide = true
    end

    # bases.each do |key,value|
    #   if letter == key
    #     bases [key] += 1
    #     is_nucleotide = true
    #   end
    # end

    unless is_nucleotide
      message.push "#{letter} is not a valid nucleotide"
    end

  end  #each letter in string

  bases.each do |key, value|
    message.push "#{key }: #{value}" if value > 0
  end
  message
end

puts count_nucleotides("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGArTGTCTGATAGCAGC")
