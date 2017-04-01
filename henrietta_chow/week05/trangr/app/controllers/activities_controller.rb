class ActivitiesController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def show
    @activity = Activity.find(params[:id])
  end

  def new
    @activity = Activity.new
  end

  def create
    @activity = Activity.find_or_create_by(name: params[:activity][:name])
    @city = City.find(params[:city_id])
    @city.activities << @activity

    if @activity.save
      redirect_to city_path(params[:city_id])
    else
      render :new
    end
  end

  private

  def clean_params
    params.require(:activity).require(:name)
  end

end
