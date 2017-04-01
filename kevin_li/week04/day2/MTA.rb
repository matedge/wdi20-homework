# Title: MTA Lab
#
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


line_n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
line_l = ['8th', '6th', 'Union Square', '3rd', '1st']
line_6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']


def single_line_trip(start_line, start_station, end_station)
  if start_line.index(start_station) < start_line.index(end_station)
    puts start_line[start_line.index(start_station)+1..start_line.index(end_station)]
  else
    puts start_line.reverse[start_line.reverse.index(start_station)+1..start_line.reverse.index(end_station)]
  end
  puts "Total stops: #{(start_line.index(start_station) - start_line.index(end_station)).abs}"
end


def multi_line_trip(start_line, start_station, end_line, end_station)
  if start_line.index(start_station) < start_line.index('Union Square')
    puts start_line[start_line.index(start_station)+1..start_line.index('Union Square')]
  else
    puts start_line.reverse[start_line.reverse.index(start_station)+1..start_line.reverse.index('Union Square')]
  end
  puts "Switch line at Union Square. Continues through:"
  if end_line.index('Union Square') < end_line.index(end_station)
    puts end_line[end_line.index('Union Square')+1..end_line.index(end_station)]
  else
    puts end_line.reverse[end_line.reverse.index('Union Square')+1..end_line.reverse.index(end_station)]
  end
  puts "Total stops: #{(start_line.index(start_station) - start_line.index('Union Square')).abs + (end_line.index('Union Square') - end_line.index(end_station)).abs}"
end


def plan_trip(start_line, start_station, end_line, end_station)
  puts "Travels through the stations:"
  single_line_trip(start_line, start_station, end_station) if start_line == end_line
  multi_line_trip(start_line, start_station, end_line, end_station) if start_line != end_line
end

plan_trip(line_n, 'Times Square', line_l, '8th')
plan_trip(line_n, '28th', line_6, '28th')
