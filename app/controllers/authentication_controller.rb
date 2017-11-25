require 'pry'
class AuthenticationController < ApplicationController
    # skip_before_action :authenticate_request

    def authenticate
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
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
      params.require(:user).permit(:email, :password)
    end

  end
