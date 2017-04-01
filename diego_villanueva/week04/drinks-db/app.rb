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
  @results = settings.db.execute "SELECT * FROM drinks;"

  erb :index, layout: :main
end

get "/drinks/new" do
  erb :new, layout: :main
end

post "/drinks" do
  settings.db.execute "INSERT INTO drinks (drink_name, drink_origin, img_src) VALUES ('#{params[:drink_name]}', '#{params[:drink_origin]}', '#{params[:img_src]}');"
  redirect "/"
end

get "/drinks/:id/edit" do
  id = params[:id]
  results = settings.db.execute "SELECT * FROM drinks WHERE id=#{id};"

  #get the drink result out of the results and assign to variable which
  #can be used in our show.erb view
  @drink = results[0]
  erb :edit, layout: :main
end

post "/drinks/:id" do
  settings.db.execute "UPDATE drinks SET drink_name='#{params['drink_name']}', drink_origin='#{params['drink_origin']}', img_src='#{params['img_src']}' WHERE id=#{params[:id]};"
  redirect "/drinks/#{params[:id]}"
end

get "/drinks/:id/delete" do
  settings.db.execute "DELETE FROM drinks WHERE id=#{params[:id]};"
  redirect "/"
end

get "/drinks/:id" do
  #fetch the id from the params
  id = params[:id]

  results = settings.db.execute "SELECT * FROM drinks WHERE id=#{id};"

  #get the drink result out of the results and assign to variable which
  #can be used in our show.erb view
  @drink = results[0]

  erb :show, layout: :main
end
