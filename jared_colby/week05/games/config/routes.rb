Rails.application.routes.draw do


root 'games#index'

get "/games/magic_8_ball", to: "games#magic_8_ball"

post "/games/magic_8_ball", to: "games#magic_8_ball_answer"

get "/games/secret_number", to: "games#secret_number"
get "/games/rock_paper_scissors", to: "game#rock_paper_scissors"


end
