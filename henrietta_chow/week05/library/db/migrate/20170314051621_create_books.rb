class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :name
      t.string :image_src
      t.string :genre
      t.integer :author_id

      t.timestamps
    end
  end
end
