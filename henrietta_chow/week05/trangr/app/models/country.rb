class Country < ApplicationRecord
  has_many :cities, dependent: :destroy
  has_many :landmarks, through: :cities
  validates_uniqueness_of :name
end
