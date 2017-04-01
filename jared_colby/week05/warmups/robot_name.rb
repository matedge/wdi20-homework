class Robot

  def name
    @instruction_counter +=1
    @name
  end

  def instruction_counter
    @instruction_counter
  end

  def initialize
    @instruction_counter = 0
    @created_time = Time.now
    self.generate_name

  end

  def reset
    @instruction_counter +=1
    self.generate_name
  end

  def get_time
    puts "Created time: #{created_time}"
    age = Time.now -@created_time
    puts "seconds elapsed since robot created: #{ age }"

  end

  private

  def generate_name
    @name = "#{generate_letters(4) }-#{ generate_numbers(3) }"
  end

  def generate_letters( length )
    ("a".."z").to_a.sample(length).join
  end
  def generate_numbers( length )
    ("0".."9").to_a.sample(length).join
  end

end


r = Robot.new
puts "first name: #{r.name}"
r.reset
puts "second name:  #{r.name}"

puts "instruction count:  #{ r.instruction_counter }"

sleep 2

r.get_time
# puts r.name
