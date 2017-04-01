# Movies I
#
# Specification
#
# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.
#
# Bonus I
#
# Modify your existing code to allow searches for multiple matches. For example, a search for "Alien" should return a list of clickable links (each of which would then take you to the full results page for the selected movie):
#
# Alien
# Aliens
# Alien 3
# Alien Resurrection
# My Stepmother Is An Alien
# etc
# The OMDB site documents the parameter you need to use to search for multiple matches.
#
# Bonus II
#
# Update your code from bonus I so that if only one movie matches your search you are forwarded directly to that movie's result page.
#
# Additional Resources
#
# Dynamic URLs in Sinatra
# Open movie database API
# HTTParty Tutorial

require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

    get '/' do
      erb :index, layout: :main_layout
    end

    get '/about' do
      erb :about, layout: :main_layout
    end

    get '/movies' do
      title = params[:title]
      @movie = HTTParty.get("http://omdbapi.com/?t=#{title}")
      @movie_search = HTTParty.get("http://omdbapi.com/?s=#{title}")
      @img_src = @movie["Poster"]

      # movie_id = params[:movie_id]
      # @movie_detail = HTTParty.get("http://omdbapi.com/?i=#{movie_id}")

      erb :movies, layout: :main_layout
    end

    # response = HTTParty.get("http://omdbapi.com/?t=lion%20king")
    # @img_src = HTTParty.get(somewhere_something)
    # movie.erb -> <img src = "<%= @img_src %>" />
