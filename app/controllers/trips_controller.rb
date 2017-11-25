require 'pry'
class TripsController < ApplicationController
    def index
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        render json: user.trips
    end
end
