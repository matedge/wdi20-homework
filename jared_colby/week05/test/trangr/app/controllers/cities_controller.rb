class CitiesController < ApplicationController
  def show
    @city = City.find(params[:id])
  end

  def new
    @city = City.new
    @country_id = params[:country_id]
    
  end

  def create
    @city = City.new(clean_params)

    if @city.save
      redirect_to root_path
    else
      render :new
    end
  end
  def clean_params
    params.require(:city).permit(:name, :country_id)
  end
end
