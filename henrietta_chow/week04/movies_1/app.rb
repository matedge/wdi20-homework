require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index, layout: :main_layout
end

get '/movie' do
  title = params[:title]
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{title}")
  puts @result
  erb :movie, layout: :main_layout
end

get '/search' do
  title = params[:title]
  search_result = HTTParty.get("http://www.omdbapi.com/?s=#{title}")
  @top_5 = search_result["Search"][0..4]
  erb :search, layout: :main_layout
end

get '/movie_details' do
  id = params[:id]
  @movie_details = HTTParty.get("http://www.omdbapi.com/?i=#{id}")
  puts @movie_details
  erb :movie_details, layout: :main_layout
end
