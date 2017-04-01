require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

configure do
  set :db, SQLite3::Database.new("database.db")
  # same as, db = SQLite3::Database.new "database.db"
  settings.db.results_as_hash = true
  # same as, db.results_as_hash = true
end

get '/' do
  erb :index, layout: :main_layout
end

get '/:table_name' do
  @page_name = params[:table_name]
  @data_array = settings.db.execute "SELECT * FROM #{@page_name};"
  erb :view_list, layout: :main_layout
end

get '/:table_name/:item_id' do
  @page_name = params[:table_name]
  item_array = settings.db.execute "SELECT * FROM #{params[:table_name]} WHERE id == #{params[:item_id]};"
  @item_data = item_array[0]
  erb :view_item, layout: :main_layout
end

get '/mountains/:id/edit' do
  item_array = settings.db.execute "SELECT * FROM mountains WHERE id=#{params[:id]};"
  @item_data = item_array[0]
  # binding.pry
  erb :mountains_edit, layout: :main_layout
end
