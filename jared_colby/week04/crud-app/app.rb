# require 'sinatra'
# require 'sinatra/reloader'
# require 'sqlite3'
# require 'pry'
#
# configure do
#   #make a new connection to our database and store it in the variable db
#   set :db, SQLite3::Database.new("database.db")
#
#   #make my sql query results easier to user
#   settings.db.results_as_hash = true
# end
#
# get "/" do
#   @results = settings.db.execute "SELECT * FROM person;"
#
#   erb :index, layout: :main
# end
#
# get "/people/new" do
#   erb :new, layout: :main
# end
#
# post "/people" do
#   settings.db.execute "INSERT INTO person (first_name, last_name, image_src) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:img_src]}');"
#   redirect "/"
# end
#
# get "/people/:id/edit" do
#   id = params[:id]
#   results = settings.db.execute "SELECT * FROM person WHERE id=#{id};"
#
#   #get the person result out of the results and assign to variable which
#   #can be used in our show.erb view
#   @person = results[0]
#   erb :edit, layout: :main
# end
#
# post "/people/:id" do
#   settings.db.execute "UPDATE person SET first_name='#{params['first_name']}', last_name='#{params['last_name']}', image_src='#{params['img_src']}' WHERE id=#{params[:id]};"
#   redirect "/people/#{params[:id]}"
# end
#
# get "/people/:id/delete" do
#   settings.db.execute "DELETE FROM person WHERE id=#{params[:id]};"
#   redirect "/"
# end
#
# get "/people/:id" do
#   #fetch the id from the params
#   id = params[:id]
#
#   results = settings.db.execute "SELECT * FROM person WHERE id=#{id};"
#
#   #get the person result out of the results and assign to variable which
#   #can be used in our show.erb view
#   @person = results[0]
#
#   erb :show, layout: :main
# end
