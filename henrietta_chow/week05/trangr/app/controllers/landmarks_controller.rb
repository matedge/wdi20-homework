class LandmarksController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy]

  def new
    @landmark = Landmark.new
  end

  def create
    @landmark = Landmark.create(clean_params)

    if @landmark.save
      redirect_to city_path(@landmark.city_id)
    else
      render :new
    end
  end

  def select
    @landmarks = City.find(params[:city_id]).landmarks
  end

  def destroy
    landmark = Landmark.find(params[:landmark_id]).destroy
    redirect_to city_path(landmark.city_id)
  end

  private

  def clean_params
    params.require(:landmark).permit(:name, :image, :city_id)
  end

end
