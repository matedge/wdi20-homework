Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # To select games on general page
  root "games#index"

  # For Magic 8 ball game
  get "/games/magic", to: "games#magic", as: "magic_game"
  # post "/games/magic/question", to: "games#ask"
  post "/games/magic/question", to: "games#answer", as: "magic_game_answer"

  # For Secret Numbers game
  get "/games/secret_numbers", to: "games#secret_numbers", as: "secret_game"
  post "/games/secret_numbers/guess", to: "games#guess"

  # For Rock Paper Scissor game
  get "/games/rock_paper_scissors", to: "games#rock_paper_scissors", as: "rock_game"
  post "/games/rock_paper_scissors/throw", to: "games#rock_paper_scissors_play"
end
