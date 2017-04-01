Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "games#index"

  get "/games", to: "games#index"
  post "/games/magic_8_ball", to: "games#magic_8_ball"
  post "/games/secret_number", to: "games#secret_number"
  post "/games/rock_paper_scissors", to: "games#rock_paper_scissors"
  get "/games/magic_8_ball", to: "games#magic_8_ball"
  get "/games/secret_number", to: "games#secret_number"
  get "/games/rock_paper_scissors", to: "games#rock_paper_scissors"

  # resources :games
  # railsy magic!

end
