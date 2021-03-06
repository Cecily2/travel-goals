Rails.application.routes.draw do

  scope :api do
    resources :users, only: [:create]
    post 'authenticate', to: 'authentication#authenticate'

    resources :trips, only: [:index, :show, :create, :destroy]
    resources :activities, only: [:create, :index, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
