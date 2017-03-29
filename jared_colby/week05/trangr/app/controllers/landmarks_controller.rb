class LandmarksController < ApplicationController
  def show
    @landmark = Landmark.find(params[:id])
  end

  def new
    @landmark = Landmark.new
    @city_id = params[:city_id]

  end

  def create
    @landmark = Landmark.new(clean_params)

    if @landmark.save
      redirect_to root_path
    end
  end

  def destroy
    landmark.delete
    redirect_to root_path
  end

  def clean_params
    params.require(:landmark).permit(:name, :city_id)
  end
end
