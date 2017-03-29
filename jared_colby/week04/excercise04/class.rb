class Person

  @@id = 0
  def initialize(first,last)
    @first_name = first
    @last_name = last
  end

  def self.speaking
    puts "I am the class"
  end

  def speak
    @foo = 123
    puts "I am speaking"
  end

  def laugh
    puts "HAHAHAHA"
  end

  def cry
    puts "waaaaaaaaa"
  end

  def print_foo
    puts @foo
  end

  def print_name
    puts "#{@first_name} #{@last_name}"
  end

end

puts Person.new("John","Kennedy")
