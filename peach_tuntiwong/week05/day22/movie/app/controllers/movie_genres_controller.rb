class MovieGenresController < ApplicationController
  def index
  @movie_genres = MovieGenre.all
  end

  # def new
  # # @movie_genres = MovieGenre.new
  # end
  #
  # def create
  # @movie_genre = MovieGenre.new(clean_params)
  # if @movie_genre.save
  #   redirect_to root_path
  # else
  #   render :new
  # end
  #
  # def show
  # @movie_category = MovieCategory.find(params[:id])
  # end
  #
  # private
  #
  # def clean_params
  #   params.require(:movie_category).permit(:name, :image_src)
  # end
end
