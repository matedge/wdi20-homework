class RpsController < ApplicationController
  def index
  end

  def show
    @user_input = params[:input].downcase
    if @user_input == 'rock'
      user_index = 1
    elsif @user_input == 'paper'
      user_index = 2
    elsif @user_input == 'scissor'
      user_index = 3
    else
      user_index = 4
    end

    ai_index = (1..3).to_a.sample
    if ai_index == 1
      @ai_input = "rock"
    elsif ai_index == 2
      @ai_input = "paper"
    else
      @ai_input = "scissor"
    end

    if user_index != 4
      # draw condition
      winner = 3 if user_index == ai_index

      # win conditions
      winner = 1 if (user_index > ai_index) && (user_index - ai_index == 1)
      winner = 1 if ( (user_index == 1)&&(ai_index == 3) )
      winner = 2 if (user_index < ai_index) && (user_index - ai_index == -1)
      winner = 2 if ( (user_index == 3)&&(ai_index == 1) )

      # output message
      if winner == 1
        @output = "Player wins!"
      elsif winner == 2
        @output = "AI wins!"
      else
        @output = "Draw!"
      end
    else
        @output = "Invalid Input!"
    end

  end
end
