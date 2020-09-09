Rails.application.routes.draw do
  resources :technologies
  resources :projects
  get '/members' => 'member#index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # this will help us differentiate between HTML and JSON requests, so that whenever we get HTML requests it'll lead us to our index and if we make a JSON request it'll go to the backend.
  get '*path', to: 'home#index', constraints: -> (request) {request.format.html?}
  # defaults our homepage to our index view through the home controller
  root to: "home#index"
end
