class DrinkItemsController < ApplicationController
  def new
    @drink_item = DrinkItem.new
    @drink_category_id = params[:drink_category_id]
  end

  def create
    @drink_item = DrinkItem.create(clean_params)
    if @drink_item.save
      redirect_to drink_category_path(@drink_item.drink_category_id)
    else
      render :new
    end
  end

  def edit
    @drink_item = DrinkItem.find(params[:id])
  end

  def update
    drink = DrinkItem.find(params[:id])
    drink.update_attributes(clean_params)
    redirect_to root_path
  end

  def destroy
    DrinkItem.find(params[:id]).destroy
    # @drink_category.drink_items.(params[:id]).destroy    #didn't work
    redirect_to root_path
  end

  private
  def clean_params
    params.require(:drink_item).permit(:name, :image_src, :drink_category_id)
  end

end
