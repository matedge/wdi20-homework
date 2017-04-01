Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "countries#index"
  get "/countries", to: "countries#show"

  resources :countries
  resources :cities
  resources :activities
  resources :landmarks

  get "signup", to: "users#new", as: "signup"
  resources :users, only: [:create]

  get "signin", to: "sessions#new", as: "signin"
  post "signin", to: "sessions#create"
  delete "signout", to: "sessions#destroy", as: "signout"
end
