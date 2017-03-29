class GamesController < ApplicationController

  def index
  end


  def magic_8_ball_answer
    params[:message]

     answers_arr =
      ['It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful']

      @magic_8_ball_answer = answers_arr.sample

  end

  def magic_8_ball
  end


  def secret_number
  end

  def rock_paper_scissors
  end
end
