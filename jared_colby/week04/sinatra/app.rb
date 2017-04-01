require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index, layout: :main_layout
end

get '/about' do
  erb :about, layout: :main_layout
end

get '/animals' do
  animals_length = params[:animals_length].to_i - 1
  
  @animals = ["Dog","Rabbit","Shark","Eagle","Wolf","Rabbit","Worm"]
  @animals = @animals[0..animals_length]
  erb :animals, layout: :main_layout
end
