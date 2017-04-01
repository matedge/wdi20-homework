class CreateDrinkItems < ActiveRecord::Migration[5.0]
  def change
    create_table :drink_items do |t|
      t.string :name
      t.string :image_src
      # t.references :drink_category, foreign_key: true  #DONT NEED THIS ONE, CHANGED IT FOR THE ONE BELOW
      t.integer :drink_category_id
      t.timestamps
    end
  end
end
