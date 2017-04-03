class HistoriesController < ApplicationController
  def create
    History.create(term: params[:term])
    render json: {}
  end
end
