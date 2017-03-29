def lines
  {
  :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l => ["8th", "6th", "Union Square", "3rd", "1st"],
  :sixth => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
end

def single_line_trip(start_line, start_station, end_station)
  start_index = lines[start_line].index(start_station)
  end_index = lines[start_line].index(end_station)
  if start_index > end_index
    lines[start_line][end_index..start_index].reverse
  else
    lines[start_line][start_index..end_index]
  end
end

def multi_line_trip(start_line, start_station, end_line, end_station)
  # get the neccassary stops that you need to make on the start line in order to get
  # to Union Square (where we can change to all other lines from)
  stops = single_line_trip(start_line, start_station, "Union Square")

  # get the neccassary stops that you need to make on the end line in order to get
  # from Union Square to your destionation
  stops += single_line_trip(end_line, "Union Square", end_station).drop(1)

  # at this point we have all the stops needs but we have "Union Square" twice
  # so we can use .uniq to get remove the duplicate stop
  # stops.uniq
end

def trip_planner(start_line, start_station, end_line, end_station)
  if start_line == end_line
    stations = single_line_trip(start_line, start_station, end_station)
  else
    stations = multi_line_trip(start_line, start_station, end_line, end_station)
  end
  puts stations
end

# trip_planner(:n, "Times Square", :n, "8th")
trip_planner(:n, "Times Square", :l, "1st")
