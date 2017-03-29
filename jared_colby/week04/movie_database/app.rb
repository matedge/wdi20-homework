require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index, layout: :layout
end

get '/movies' do
  title = params[:title]
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{title}")

end
