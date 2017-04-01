class FoodCategory < ApplicationRecord
  has_many :food_items
  validates_uniqueness_of :name, :image_src
end
