class CreateFavourites < ActiveRecord::Migration[5.0]
  def change
    create_table :favourites do |t|
      t.string :image_src

      t.timestamps
    end
  end
end
