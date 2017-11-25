class UsersController < ApplicationController
    # skip_before_action :authenticate_request

    def create
        user = User.new(user_params)
        if user.save
            jwt = JsonWebToken.encode({user_id: user.id})
            response = {
                jwt: jwt,
                id: user.id,
                email: user.email,
                name: user.name
            }
            render json: response, status: 201
        else
            # error code
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end