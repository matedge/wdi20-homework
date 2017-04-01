class CreateMotorcycles < ActiveRecord::Migration[5.0]
  def change
    create_table :motorcycles do |t|
      t.string :model
      t.string :image_src
      t.integer :brand_id
      t.timestamps
    end
  end
end
