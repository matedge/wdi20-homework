class Author < ApplicationRecord
  has_many :books
  validates_uniqueness_of :first_name, scope: :last_name
end
