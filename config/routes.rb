Rails.application.routes.draw do
  root to: 'visitors#index'
  devise_for :users
  resources :users
  resources :menuitems
  resources :photos

  get "photo" => "visitors#photo"
  get "contact" => "visitors#contact"

end
