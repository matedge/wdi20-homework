class City < ApplicationRecord
  belongs_to :country
  has_many :landmarks, dependent: :destroy
  has_and_belongs_to_many :activities, -> { distinct }
  validates_uniqueness_of :name
end
