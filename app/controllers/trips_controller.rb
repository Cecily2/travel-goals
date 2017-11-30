require 'pry'
class TripsController < ApplicationController
    def index
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        render json: user.trips, :include => [:activities]
    end

    def create
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        trip = user.trips.build(trip_params)
        trip.save
        render json: trip
    end


    private

    def trip_params
        params.require(:trip).permit(:location, :date, :notes, :image_creator, :image_creator_link, :image_full, :image_raw, :image_regular, :image_small, :image_thumb)
    end
end
