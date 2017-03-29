class Activity < ApplicationRecord
  has_and_belongs_to_many :cities, -> { distinct }
  validates_uniqueness_of :name
end
