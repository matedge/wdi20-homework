class BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def new
    @book = Book.new
    @author_id = params[:author_id]
  end

  def create
    @book = Book.create(clean_params)
    redirect_to author_path(@book.author_id)
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    book = Book.find(params[:id])
    book.update_attributes(clean_params)
    redirect_to book_path(book.id)
  end

  def show
    @book = Book.find(params[:id])
  end

  def destroy
    Book.find(params[:id]).destroy
    redirect_to books_path
  end

  private

  def clean_params
    params.require(:book).permit(:name, :image_src, :genre, :author_id)
  end

end
