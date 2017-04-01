class City < ApplicationRecord
  belongs_to :country
  has_many :landmarks
  has_and_belongs_to_many :activities, -> { distinct }
end
