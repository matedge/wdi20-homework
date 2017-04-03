class FavouritesController < ApplicationController
  def create
    Favourite.create(image_src: params[:image_src])
    render json: {message: "Cheers, all good"}
  end

  def index
    @favourites  = Favourite.all
  end
end
