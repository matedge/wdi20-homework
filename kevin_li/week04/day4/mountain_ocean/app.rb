# Mountains or Oceans
#
# Create a CRUD (Create, Read, Update, Delete) app for either Mountains or Oceans (or anything else that you pick).
#
# Make sure to include the following:
#
# A page of all records in your database (e.g. all mountains)
# A page that shows one record (e.g. one mountain)
# A way to create, update, and delete a record
# Make sure to use:
#
# SQL
# Seperate your concerns (with views for each action)
# Use a layout to hold all of your generic code


require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

configure do
  #make a new connection to our database and store it in the variable db
  set :db, SQLite3::Database.new("database.db")

  #make my sql query results easier to user
  settings.db.results_as_hash = true
end

get "/" do
  @results = settings.db.execute "SELECT * FROM tennis_players;"

  erb :index, layout: :main
end

get "/tennis_player/new" do
  erb :new, layout: :main
end

post "/tennis_player" do
  settings.db.execute "INSERT INTO tennis_players (first_name, last_name, age, ranking, image_src) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:age]}', '#{params[:ranking]}', '#{params[:img_src]}');"
  redirect "/"
end

get "/tennis_player/:id/edit" do
  id = params[:id]
  results = settings.db.execute "SELECT * FROM tennis_players WHERE id=#{id};"

  #get the tennis_players result out of the results and assign to variable which
    #can be used in our show.erb view
    @tennis_players = results[0]
    erb :edit, layout: :main
  end

  post "/tennis_player/:id" do
    settings.db.execute "UPDATE tennis_players SET first_name='#{params['first_name']}', last_name='#{params['last_name']}', age='#{params['age']}', ranking='#{params['ranking']}', image_src='#{params['img_src']}' WHERE id=#{params[:id]};"
    redirect "/tennis_player/#{params[:id]}"
  end

  get "/tennis_player/:id/delete" do
    settings.db.execute "DELETE FROM tennis_players WHERE id=#{params[:id]};"
    redirect "/"
  end

  get "/tennis_player/:id" do
    #fetch the id from the params
    id = params[:id]

    results = settings.db.execute "SELECT * FROM tennis_players WHERE id=#{id};"

    #get the tennis_players result out of the results and assign to variable which
    #can be used in our show.erb view
    @tennis_players = results[0]

    erb :show, layout: :main
  end
