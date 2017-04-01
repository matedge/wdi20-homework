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

class Drink < ActiveRecord::Base
end

get "/" do
  @results = Drink.all
  erb :index, layout: :main_layout
end

get "/drinks/new" do
  # we have to put this before the other gets because the other one has :id which means that anything after the / will be taken as a parameter
  erb :new, layout: :main_layout
end

post "/drinks" do
  #this one is creating a new record. Then redirect to home
  Drink.create(params)
  redirect "/"
end

get "/drinks/:id/edit" do
  @drink = Drink.find(params[:id])
  erb :edit, layout: :main_layout
end

post "/drinks/:id" do
  params.delete("splat")
  params.delete("captures")
  Drink.find(params[:id]).update_attributes(params)
  redirect "/drinks/#{params[:id]}"
end

get "/drinks/:id/delete" do
  Drink.find(params[:id]).delete
  redirect "/"
end


get "/drinks/:id" do
  #fetch the id from the params, which is the :id
  @drink = Drink.find(params[:id])
  erb :show, layout: :main_layout
end
