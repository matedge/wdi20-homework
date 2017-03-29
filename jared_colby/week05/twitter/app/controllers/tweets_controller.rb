class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
  end

  def new
    @tweet = Tweet.new
  end

  def create
    Tweet.create(tweet_params)
    redirect_to root_path
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update_attributes(tweet_params)
    redirect_to root_path
  end

  def destroy
    Tweet.find(params[:id]).destroy
    redirect_to root_path
  end

  def show
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end

end
