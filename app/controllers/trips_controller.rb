require 'pry'
class TripsController < ApplicationController
    def index
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        render json: user.trips, :include => [:activities]
    end

    def create
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        if user = User.find(decoded_token[:user_id])
            trip = user.trips.build(trip_params)
            if trip.save
                render json: trip
            else
                render json: { message: trip.errors }, status: 400
            end
        else
            render json: { message: "User authentication failed" }
        end
    end

    def destroy
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        trip = Trip.find(params[:id])
        if trip.user === user
            trip.destroy
            render status: 204
        else
            render json: { message: "Unable to delete trip" }, status: 400
        end
    end


    private

    def trip_params
        params.require(:trip).permit(:location, :date, :notes, :image_creator, :image_creator_link, :image_full, :image_raw, :image_regular, :image_small, :image_thumb)
    end
end
