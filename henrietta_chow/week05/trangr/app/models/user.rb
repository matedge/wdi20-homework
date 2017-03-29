class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :email
  validates :email, exclusion: {
    in: ["xander@me.com", "xander@ga.com"],
    message "This is a forbidden email"
  }
  validates :email, format: {
    with: /\A.*@wdi.com\z/
  }
end
