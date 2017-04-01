class DrinkCategoriesController < ApplicationController
  def index
    @drink_categories = DrinkCategory.all
  end

  def new
    @drink_category = DrinkCategory.new
  end

  def create
    @drink_category = DrinkCategory.create(clean_params)
    if @drink_category.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @drink_category = DrinkCategory.find(params[:id])
  end

  private

  def clean_params
    params.require(:drink_category).permit(:name, :image_src)
  end

end
