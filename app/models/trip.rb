class Trip < ApplicationRecord
    geocoded_by :location
    after_validation :geocode

    belongs_to :user
    has_many :activities
end
