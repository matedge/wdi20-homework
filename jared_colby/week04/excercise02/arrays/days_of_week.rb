days_of_the_week = %w{Monday Tuesday Wednesday Thursday Friday Saturday Sunday}

days_of_the_week.unshift(days_of_the_week.pop)

weekends = days_of_the_week.select{|i| i[0] == "S"}

weekdays = days_of_the_week.select{|i| i[0] != "S"}

new_week = weekdays + weekends

new_week.delete_if {|i| i[0] == "S"}

# new_week.sort {|x,y| x[1] <=> y[1]}

puts new_week
