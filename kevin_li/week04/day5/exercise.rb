class Food
  attr_accessor :name, :protein, :carbohydrate, :fat, :vitamin, :dietary_fibre
end

class Fruit < Food

  def initialize(name, protein, carbohydrate, fat, vitamin_c, dietary_fibre)
    @name = name
    @protein = protein
    @carbohydrate = carbohydrate
    @fat = fat
    @vitamin_c = vitamin_c
    @dietary_fibre = dietary_fibre
  end

  def print_nutrients
    puts "Protein: #{@protein} g"
    puts "Carbohydrate: #{@carbohydrate} g"
    puts "Fat: #{@fat} g"
    puts "Vitamin C: #{@vitamin_c}%"
    puts "Dietary fibre: #{@dietary_fibre} g"
  end

  def is_healthy
    if @protein > @fat && @vitamin_c > 50 && @dietary_fibre > 1
      puts "#{@name} is healthy."
    else
      puts "#{@name} is not healthy."
    end
  end
end

orange = Fruit.new "Orange", 0.9, 12, 0.1, 88, 2.4

orange.print_nutrients
orange.is_healthy
