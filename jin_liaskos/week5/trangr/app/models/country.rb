class Country < ApplicationRecord
  has_many :cities
  has_many :landmarks, through: :cities
  validates_uniqueness_of :name
end
