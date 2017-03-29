
class Robot

  def name
    @name
  end

  def instruction_count
    @instruction_count
  end

  def mac_address
    @mac_address
  end

  def initialize
    @instruction_count = 0
    @mac_address = generate_letters 6
    @created_time = Time.now
    puts "Created time is: #{ @created_time }"
    generate_name
  end

  def generate_name
    @instruction_count += 1
    @name = "#{ generate_letters(2) }#{ generate_numbers(3) }"
  end

  def reset
    generate_name
    puts "Restting to factory defaults..."
  end

  def timers
    @instruction_count += 1
    @time_since_created = Time.now.sec - @created_time.sec  #using .sec here makes for nicer formatting
    puts "This robot was created #{ @time_since_created } seconds ago."
  end

  private

  # We want these methods to be available only to other methods inside this class, not via objects
  # created

    def generate_letters( length )
      # you can have a range of letters too! make sure you convert your range to an array with
      # .to_a before trying to use array-specific methods like .sample
      ("A".."Z").to_a.sample( length ).join
    end

    def generate_numbers( length )
      (0..9).to_a.sample( length ).join
    end

end



robbie = Robot.new

puts "Name: #{ robbie.name }"
puts "MAC: #{ robbie.mac_address }"

robbie.reset

puts "Name: #{ robbie.name }"

puts "Instructions: #{ robbie.instruction_count }"

# this won't work once we move this method into the 'private' section
# puts robbie.generate_numbers 10

sleep 1
robbie.timers
