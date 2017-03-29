class ActivitiesController < ApplicationController
  def show
    @activity = Activity.find(params[:id])
  end

  # def new
  #   @activity = Activity.new
  #   @city_id = params[:city_id]
  # end
  #
  # def create
  #   @activity = Activity.new(clean_params)
  #
  #   if @activity.save
  #     render :show
  #   else
  #     render :new
  #   end
  # end
  #
  # def clean_params
  #   params.require(:activity).permit(:name, :city_id)
  # end

end


# city[:activities].each do |activity_name|
#   activity = Activity.find_or_create_by(name: activity_name)
#   new_city.activities << activity
# end
