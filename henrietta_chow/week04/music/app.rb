require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

configure do
  set :db, SQLite3::Database.new("database.db")

  settings.db.results_as_hash = true
end


get "/" do
  @results = settings.db.execute "SELECT * FROM musicians;"
  # db.close
  erb :index, layout: :main
end

get "/music/search" do
  erb :search, layout: :main
end

get "/music/search/genre" do
  @search_results = settings.db.execute "SELECT * FROM musicians WHERE genre LIKE '#{params[:genre]}';"
  # db. close
  erb :search_results, layout: :main
end

get "/music/search/name" do
  @search_results = settings.db.execute "SELECT * FROM musicians WHERE name LIKE '#{params[:name]}';"
  # db.close
  erb :search_results, layout: :main
end


get "/music/new" do
  erb :new, layout: :main
end

post "/music" do
  settings.db.execute "INSERT INTO musicians (name, genre, img_src, music_url, top_hit) VALUES ('#{params[:name]}', '#{params[:genre]}', '#{params[:img_src]}', '#{params[:music_url]}', '#{params[:top_hit]}');"
  # db.close
  redirect "/"
end

get "/music/:id/edit" do
  id = params[:id]
  result = settings.db.execute "SELECT * FROM musicians WHERE id='#{params[:id]}';"
  @profile = result[0]

  erb :edit, layout: :main
end

get "/music/:id/delete" do
  id = params[:id]
  settings.db.execute "DELETE FROM musicians WHERE id='#{params[:id]}';"
  # db.close

  redirect "/"
end

post "/music/:id" do
  settings.db.execute "UPDATE musicians SET name='#{params[:name]}', genre='#{params[:genre]}', music_url='#{params[:music_url]}', img_src='#{params[:img_src]}', top_hit='#{params[:top_hit]}' WHERE id=#{params[:id]};"
  # db.close

  redirect "/music/#{params[:id]}"
end

get "/music/:id" do
  id = params[:id]
  result = settings.db.execute "SELECT * FROM musicians WHERE id='#{params[:id]}';"
  # db.close
  @profile = result[0]

  erb :profile, layout: :main
end
