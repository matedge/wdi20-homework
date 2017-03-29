class Brand < ApplicationRecord
  has_many :motorcycles
  validates_uniqueness_of :manufacturer, :image_src
end
