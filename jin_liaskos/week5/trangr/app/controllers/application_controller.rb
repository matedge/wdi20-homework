class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :fetch_user

  private

  def fetch_user
    @current_user = User.find_by_id(session[:user_id])

  end

  def authenticate_user
   if @current_user
     return redirect_to
   end
  end
end
