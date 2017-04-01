require 'sqlite3'
require 'pry'
require 'active_record'


  ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "database.db"
  )

class Motorcycle < ActiveRecord::Base
end

binding.pry
