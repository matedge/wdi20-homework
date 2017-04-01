class FoodCategories <ApplicationController

  def index
    @food_categories = FoodCategory.all
  end

  def new
    @food_category = FoodCategory.new
  end

  def create
    @food_category = FoodCategory.new(clean_params)
    if @food_category.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @food_category = FoodCategory.find(params)
  end

  private

  def clean_params
    params.require(:food_category).permit(:name, :image_src)
  end

end
