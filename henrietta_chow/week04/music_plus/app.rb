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

after {ActiveRecord::Base.clear_active_connections!}

class Musician < ActiveRecord::Base
end

get "/" do
  @results = Musician.all
  # @results = settings.db.execute "SELECT * FROM musicians;"
  erb :index, layout: :main
end

get "/music/search" do
  erb :search, layout: :main
end

get "/music/search/genre" do
  # @search_results = Musician.where(genre: params[:genre])
  @search_results = settings.db.execute "SELECT * FROM musicians WHERE genre LIKE '#{params[:genre]}';"

  erb :search_results, layout: :main
end

get "/music/search/name" do
  # @search_results = Musician.where(name: params[:name])
  @search_results = settings.db.execute "SELECT * FROM musicians WHERE name LIKE '#{params[:name]}';"

  erb :search_results, layout: :main
end


get "/music/new" do
  erb :new, layout: :main
end

post "/music" do
  Musician.create(params)
  # settings.db.execute "INSERT INTO musicians (name, genre, img_src, music_url, top_hit) VALUES ('#{params[:name]}', '#{params[:genre]}', '#{params[:img_src]}', '#{params[:music_url]}', '#{params[:top_hit]}');"

  redirect "/"
end

get "/music/:id/edit" do
  # id = params[:id]
  # result = settings.db.execute "SELECT * FROM musicians WHERE id='#{params[:id]}';"
  # @profile = result[0]
  @profile = Musician.find(params[:id])

  erb :edit, layout: :main
end

get "/music/:id/delete" do
  Musician.find(params[:id]).delete
  redirect "/"
end

post "/music/:id" do
  params.delete("splat")
  params.delete("captures")
  Musician.find(params[:id]).update_attributes(params)
  redirect "/music/#{params[:id]}"
end

get "/music/:id" do
  @profile = Musician.find(params[:id])
  erb :profile, layout: :main
end
