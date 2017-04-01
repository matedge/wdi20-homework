Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "games#index"
  get "/games/magic8", to: "games#magic8", as: "magic8"
  get "/games/magic8/:id", to: "games#magic8_answer", as: "magic8_answer"
  get "/games/secret_number", to: "games#secret_number", as: "secret_number"
  get "/games/rock_paper_scissors", to: "games#rock_paper_scissors", as: "rock_paper_scissors"
end
