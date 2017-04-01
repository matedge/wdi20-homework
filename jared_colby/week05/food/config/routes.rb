Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root "food_categories#index}"
resources :food_categories
resources :food_items, only: [:new, :create]

end
