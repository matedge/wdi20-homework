Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "brands#index"

  resources :brands

  resources :motorcycles

end
