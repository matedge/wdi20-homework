def lines
  {
    :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd",  "1st"],
    :six => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def single_line_trip(line, start_station, end_station)
  start_index = lines[line].index(start_station)
  end_index = lines[line].index(end_station)
  if start_index < end_index
    lines[line][start_index..end_index]
  else
    lines[line][end_index..start_index].reverse   #for reverse single line trip, reverse the array to print the trip array
  #start_index < end_index ? lines[line][start_index..end_index] : lines[line][end_index..start_index].reverse
  end
end

def plan_trip (start_line, start_station, end_line, end_station)
  if start_line == end_line
    trip_arr = single_line_trip(start_line, start_station, end_station).drop(1)   #removing the first station from array
    puts "Your journey: #{trip_arr.join(", ")}"
    puts "#{trip_arr.length} stops in total"
  else
    first_leg = single_line_trip(start_line, start_station, "Union Square").drop(1)    #splitting the trip to 2 but still using the same single line function
    second_leg = single_line_trip(end_line, "Union Square", end_station).drop(1)
    trip_arr = first_leg + second_leg
    puts "Your journey: #{trip_arr.join(", ")}"     #convert trip array into string
    puts "On #{start_line} Line: #{first_leg.join(", ")}. Change at Union Square."
    puts "Then go on #{end_line} Line: #{second_leg.join(", ")}"    #print out trip for each leg
    puts "#{trip_arr.length} stops in total"
  end
end



#tests
puts plan_trip :n, "Times Square", :n, "Union Square"     #single line test
puts plan_trip :l, "1st", :l, "8th"     #single line reverse test
puts plan_trip :n, "Times Square", :six, "Grand Central"    #change line tests
puts plan_trip :l, "1st", :n, "8th"
