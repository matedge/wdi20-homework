Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root "tweets#index"
# get "/tweets", to: "tweets#index"
# get "/tweets/new", to: "tweets#new", as: "new_tweet"
# post "/tweets", to: "tweets#create"
# get "/tweets/:id/edit", to: "tweets#edit", as: "edit_tweet"
# patch "/tweets/:id", to: "tweets#update"
# delete "tweets/:id", to:"tweets#destroy"
# get "tweets/:id", to: "tweets#show", as: "tweet"
resources :tweets
end
