class MotorcyclesController < ApplicationController


  def new
    @motorcycle = Motorcycle.new
    @brand_id = params[:brand_id]

  end

  def create
    @motorcycle = Motorcycle.new(clean_params)
    if @motorcycle.save
      redirect_to brand_path(@motorcycle.brand_id)
    else
      render :new
    end
  end

  private

  def clean_params
    params.require(:motorcycle).permit(:model, :image_src, :brand_id)
  end
end
