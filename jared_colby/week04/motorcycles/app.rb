require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'


configure do
  ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "database.db"
  )
end

class Motorcycle < ActiveRecord::Base
end

get "/" do
  @results = Motorcycle.all

  erb :index, layout: :main
end

get "/motorcycles/new" do
  erb :new, layout: :main
end

get "/motorcycles/club_members" do
  @results = Motorcycle.all
  erb :club_members, layout: :main
end


post "/motorcycles" do  #creates new record in database

  Motorcycle.create(params)

  redirect "/"
end

get "/motorcycles/:id/edit" do
  @motorcycle = Motorcycle.find(params[:id])
erb :edit, layout: :main
end

post "/motorcycles/:id" do  #updates rows in database
  params.delete("splat")
  params.delete("captures")
  @motorcycle = Motorcycle.find(params[:id]).update_attributes(params)
  redirect "/motorcycles/#{params[:id]}"
end

get "/motorcycles/:id/like" do #adds a counter to the like column
  motorcycle = Motorcycle.find(params[:id])
  add_likes = motorcycle['likes'] + 1
  motorcycle.update_attributes(likes: add_likes)
  redirect "/motorcycles/#{params[:id]}"
end

get "/motorcycles/:id/prev" do  #allows button to skip backwords through images of each record
  ids = Motorcycle.pluck :id
  index = ids.index(params[:id].to_i)
  index -= 1 unless ids[index-1].nil?
  redirect "/motorcycles/#{ids[index]}"
end

get "/motorcycles/:id/next" do  #allows to skip forward through images of each record
  ids = Motorcycle.pluck :id
  index = ids.index(params[:id].to_i)
  index += 1
  if ids[index].nil?
    redirect "/motorcycles/#{ids.first}"
  else
    redirect "/motorcycles/#{ids[index]}"
  end
end

get "/motorcycles/:id/delete" do
  Motorcycle.find(params[:id]).delete
  redirect "/"
end

get "/motorcycles/:id" do
  @motorcycle = Motorcycle.find(params[:id])

  erb :show, layout: :main
end
