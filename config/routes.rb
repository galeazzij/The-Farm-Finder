Rails.application.routes.draw do
  resources :farms
  resources :foods
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/farms/:farm_id/foods/:id', to: 'foods#add_flavor'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
