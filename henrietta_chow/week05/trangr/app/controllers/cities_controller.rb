class CitiesController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy]

  def show
    @city = City.find(params[:id])
  end

  def create
    @city = City.create(clean_params)
    if @city.save
      redirect_to city_path(@city.id)
    else
      render :new
    end
  end

  def new
    @city = City.new
  end

  def destroy
    city = City.find(params[:city_id]).destroy
    redirect_to controller: "countries", action: "show", country_id: city.country_id
  end

  private

  def clean_params
    params.require(:city).permit(:name, :country_id)
  end

end
