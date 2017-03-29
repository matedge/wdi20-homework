class SecretController < ApplicationController
  def initialize
  end

  def index

  end

  def show
    @number = params[:q].to_i
    @answer = (1..10).to_a.sample
    if @number == @answer
      @text = "You win!"
    else
      @text = "Try again!"
    end
  end
end
