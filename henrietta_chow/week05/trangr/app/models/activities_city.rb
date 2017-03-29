class ActivitiesCity < ActiveRecord::Base
  validates_uniqueness_of :activity_id, scope: :city_id
end
