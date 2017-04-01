class FoodItemsController < ApplicationController
  def new
    @food_item = FoodItem.new
    @food_category_id = params[:food_category_id]
  end

  def create
    @food_item = FoodItem.new(clean_params)
    if @food_items.save
  end

  private


end
