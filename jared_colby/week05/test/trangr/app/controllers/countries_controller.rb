class CountriesController < ApplicationController
  def index
    @countries = Country.all
    @user = User.find_by_id(session[:user_id])
  end

  def show
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
    @country = Country.find(params[:country_id])

  end
  def clean_params
    params.require(:country).permit(:name)
  end
end
