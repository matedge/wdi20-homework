
class CreateFoodItems < ActiveRecord::Migration[5.0]
  def change
    create_table :food_items do |t|
      t.string :name
      t.string :image_src
      t.integer :food_category_id
      t.timestamps
    end
  end
end
