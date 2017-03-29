class CountriesController < ApplicationController
  before_action :authenticate_user, only: [:edit, :update]

  def index
    @countries = Country.all
  end

  def show
    flash[:success] = "We found the country for you :)"
    @country = Country.find(params[:country_id])
  end

  def new
    @country = Country.new
  end

  def create
    @country = Country.new(clean_params)
    if @country.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @country = Country.find(params[:id])
  end

  def update
    @country = Country.find(params[:id])
    if @country.update_attributes(clean_params)
      redirect_to controller: "countries", action: "show", country_id: @country.id
    else
      render :edit
    end
  end

  private

  def clean_params
    params.require(:country).permit(:name)
  end
end
