class CreateActivitiesCitiesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :activities_cities do |t|
      t.integer :activity_id
      t.integer :city_id

      t.timestamps
    end
  end
end
