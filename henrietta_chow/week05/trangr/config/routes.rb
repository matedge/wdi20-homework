Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "countries#index"
  get "/countries", to: "countries#show", as: "country"
  delete "/countries", to: "countries#destroy"
  get "/landmarks", to: "landmarks#select", as: "landmark_select"

  resources :countries, only: [:new, :edit, :update, :create]
  resources :cities, only: [:show, :create, :new, :destroy]
  resources :activities, only: [:show, :create, :new]
  resources :landmarks, only: [:create, :new, :destroy]

  get "signup", to: "users#new", as: "signup"
  resources :users, only: [:create]

  get "signin", to: "sessions#new", as: "signin"
  post "signin", to: "sessions#create"
  delete "signout", to: "sessions#destroy", as:"signout"
end
