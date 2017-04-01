class DrinkCategory < ApplicationRecord
  has_many :drink_items
  validates_uniqueness_of :name, :image_src
end
