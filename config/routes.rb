Rails.application.routes.draw do
  root to: 'visitors#index'
  devise_for :users
  resources :users
  resources :menuitems
  resources :photos

  get "photo" => "visitors#photo"
  get "contact" => "visitors#contact"
  get "admin/photos" => "admin#approve_photos"
  get "menu" => "menuitems#index"
  get "admin" => "admin#approve_photos"
end
