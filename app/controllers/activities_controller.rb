class ActivitiesController < ApplicationController
    def create
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        # user = User.find(decoded_token[:user_id])
        activity = Activity.new(activity_params)
        if activity.save
            render json: activity
        else
            render json: { message: activity.errors }, status: 400
        end
    end


    def destroy
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        user = User.find(decoded_token[:user_id])
        activity = Activity.find(params[:id])

        if activity.trip.user === user
            activity.destroy
            render status: 204
        else
            render json: { message: "Unable to delete activity"}, status: 400
        end

    end

    private

    def activity_params
        params.require(:activity).permit(:name, :link, :description, :trip_id)
    end


end