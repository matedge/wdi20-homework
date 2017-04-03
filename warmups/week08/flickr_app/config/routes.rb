Rails.application.routes.draw do

  get "/screensaver", to: "pages#screensaver"

  root "pages#index"
  get "favourites", to: "favourites#index"
  post "favourites", to: "favourites#create"
  post "histories", to: "histories#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
