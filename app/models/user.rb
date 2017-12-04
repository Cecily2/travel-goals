class User < ApplicationRecord
    has_many :trips
    has_secure_password
    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
end
