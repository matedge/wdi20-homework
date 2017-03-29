require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index, layout: :main_layout
end


get '/movie' do
  movie_title = params[:movie_title]
  response = HTTParty.get( 'http://omdbapi.com/?t=' + movie_title )
  @movie_title = response["Title"]
  @movie_year = response["Year"]
  @movie_actors = response["Actors"]
  @movie_image = response["Poster"]
  erb :movie, layout: :main_layout
end

# get '/movie_search' do
#   movie_search = params[:movie_search]
#   response = HTTParty.get( 'http://omdbapi.com/?s=' + movie_search )
#   @results = response["Search"][1]["Title"]
#
# end

get '/movie_search' do
  movie_search = params[:movie_search]
  response = HTTParty.get( 'http://omdbapi.com/?s=' + movie_search )
  @results = response["Search"]
  erb :movie_search, layout: :main_layout

end
