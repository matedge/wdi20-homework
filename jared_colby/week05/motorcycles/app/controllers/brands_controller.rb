class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brand = Brand.new
  end

  def show
    @brand = Brand.find(params[:id])
  end

  def create
    @brand = Brand.new(clean_params)
    if @brand.save
      redirect_to root_path
    else
      render :new
    end
  end

  def clean_params
    params.require(:brand).permit(:manufacturer, :image_src)
  end

end
