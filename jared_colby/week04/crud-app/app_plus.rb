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

class Person < ActiveRecord::Base
end

get "/" do
  @results = Person.all
  erb :index, layout: :main
end

get "/people/new" do
  erb :new, layout: :main
end

post "/people" do
  Person.create(params)
  redirect "/"
end

get "/people/:id/edit" do
  @person = Person.find(params[:id])
  erb :edit, layout: :main
end

post "/people/:id" do
  params.delete("splat")
  params.delete("captures")
  Person.find(params[:id]).update_attributes(params)
  redirect "/people/#{params[:id]}"
end

get "/people/:id/delete" do
  Person.find(params[:id]).delete
  redirect "/"
end

get "/people/:id" do
  #fetch the id from the params
  @person = Person.find(params[:id])
  erb :show, layout: :main
end
