class CountriesController < ApplicationController
  before_action :authenticate_user, only: [:create, :edit, :update, :destroy]

  def index
    @countries = Country.all
  end

  def show
    flash[:success] = "We found the country for you :)"
    @country = Country.find(params[:country_id])
  end

  def create
    @country = Country.create(clean_params)
    if @country.save
      redirect_to controller: "countries", action: "show", country_id: @country.id
    else
      render :new
    end
  end

  def new
    @country = Country.new
  end

  def edit
    @country = Country.find(params[:id])
  end

  def update
    @country = Country.find(params[:id])
    if @country.update_attributes(clean_params)
      redirect_to controller: "countries", action: "show", id: params[:id]
    else
      render :edit
    end
  end

  def destroy
    if @current_user.admin
      country = Country.find(params[:id]).destroy
      flash[:success] = "You deleted #{country.name}."
      redirect_to root_path
    else
      flash[:error] = "Action denied"
      redirect_to root_path
   end

  private

  def clean_params
    params.require(:country).permit(:name)
  end

end
