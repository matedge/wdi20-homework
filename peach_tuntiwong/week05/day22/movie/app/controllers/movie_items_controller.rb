class MovieItemsController < ApplicationController
  # def new
  #   @movie_item = MovieItem.new
  #   @movie_genre_id = params[:movie_genre_id]
  # end
  #
  # def create
  #   @movie_item = MovieItem.new(clean_params)
  #   if @movie_item.save
  #     redirect_to movie_genre_path(@movie_item.movie_genre_id)
  #   else
  #     render :new
  #   end
  # end
  #
  # private
  #
  # def clean_params
  #   params.require(:movie_item).permit(:name, :image_src, :movie_genre_id)
  # end
end
