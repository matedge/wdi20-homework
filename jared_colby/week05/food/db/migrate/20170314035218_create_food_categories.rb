class CreateFoodCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :food_categories do |t|
      t.string :name
      t.string :image_src

      t.timestamps
    end
  end
end
