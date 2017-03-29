class CreateLandmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :landmarks do |t|
      t.string :name
      t.string :image
      t.integer :city_id

      t.timestamps
    end
  end
end
