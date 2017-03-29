class Atbash

  def initialize
    @alphabet = ("a".."z").to_a
    @reversed = @alphabet.reverse
  end

  def encode ( str )
    message = ''
    str.downcase.chars.each do |char|
      pos = @alphabet.index char
      message += @reversed[ pos ]
    end
    message
  end
end

at = Atbash.new

puts at.encode( "test" )
