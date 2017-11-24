Rails.application.routes.draw do
  scope :api do
    resources :users, only: [:create]
    resources :trips, only: [:index, :show, :create]
    resources :activities, only: [:create, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
