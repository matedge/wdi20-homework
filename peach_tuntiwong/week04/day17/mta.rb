# Jarad's

def subway = {
    :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd", "1st"],
    :6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def singel_line_trip(line, start_stop, end_stop)
  start_index = subway[line].index(start_stop)
  end_index = subway[line].index(end_stop)
  start_index > end_index ? subway[line][start_index..end_index].reverse : subway[line][start_index..end_index]
end

def multi_line_trip(start_line, start_stop, end_line, end_stop)
  stops = single_line_trip(start_line, start_station, "Union Square") + single_line_trip(end_line, "Union Square", end_station).drop(1)
end

def trip_planner(start_line, start_stop, end_line, end_stop)
  if start_line==end_line
    single_line_trip(start_line, start_stop, end_stop)
  else
    multi_line_trip(start_line, start_stop, end_line, end_stop)
  end
end
