Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "movie_genres#index"
  resources :movie_genres
  resources :movie_items
end
