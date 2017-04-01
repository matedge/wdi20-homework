class GamesController < ApplicationController

  def index
  end

  def magic_8_ball
    @answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Do not count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ]

    @answer = @answers[Random.rand(20)]

  end

  def secret_number
    @number = Random.rand(10)
  end


  def rock_paper_scissors
    @patterns = %w(rock paper scissors)
    @pattern = @patterns[Random.rand(3)]
  end

end
