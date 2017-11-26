class ActivitiesController < ApplicationController
    def create
        decoded_token = JsonWebToken.decode(request.headers['Authorization'])
        # user = User.find(decoded_token[:user_id])
        # User not used now but might be useful for authorization?
        activity = Activity.new(activity_params)
        if activity.save
            render json: activity
        else
            # send error
        end
    end


    private

    def activity_params
        params.require(:activity).permit(:name, :link, :description, :trip_id)
    end


end