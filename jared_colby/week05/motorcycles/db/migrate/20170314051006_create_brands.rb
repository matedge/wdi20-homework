class CreateBrands< ActiveRecord::Migration[5.0]
  def change
    create_table :brands do |t|
      t.string :manufacturer
      t.string :image_src
      t.timestamps
    end
  end
end
