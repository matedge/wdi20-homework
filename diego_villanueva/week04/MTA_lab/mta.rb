
number_of_stops = 0

def lines
  {
    :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', "8th"],
    :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
    :six => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  }
end

def find_position (line, station)
  lines[line].index(station)
end

def create_trip (station1, station2, line)
  trip = []
  position1 = find_position(line, station1)
  position2 = find_position(line, station2)

  if (position2 - position1) > 0 #go right
    lines[line][position1..position2].each do |station|
      trip.push(station)
    end #go left
    trip
  else
    lines[line][position2..position1].reverse.each do |station|
      trip.push(station)
    end
    trip
  end
end   #close create_trip

def plan_trip (line1, station1, line2, station2)
  big_trip = []   #this is both trips if different lines
  if line1 == line2
    big_trip.push(create_trip(station1,station2,line1))
  else
    big_trip.push(create_trip(station1,'Union Square',line1))
    big_trip.push(create_trip('Union Square',station2,line2))
  end
  puts big_trip
end #close plan_trip


plan_trip(:n, '34th', :six, 'Grand Central')
