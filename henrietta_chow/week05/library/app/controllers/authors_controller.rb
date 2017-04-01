class AuthorsController < ApplicationController

  def index
    @authors = Author.all
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.create(clean_params)
    if @author.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @author = Author.find(params[:id])
  end

  def update
    author = Author.find(params[:id])
    author.update_attributes(clean_params)
    redirect_to author_path(author.id)
  end

  def show
    @author = Author.find(params[:id])
  end

  def destroy
    Author.find(params[:id]).destroy
    redirect_to root_path
  end

  private

  def clean_params
    params.require(:author).permit(:first_name, :last_name, :image_src)
  end

end
