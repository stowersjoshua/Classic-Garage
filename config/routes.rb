Rails.application.routes.draw do


  mount Ckeditor::Engine => '/ckeditor'
  root to: 'visitors#index'
  devise_for :users

  resources :articles
  resources :users
  resources :menuitems
  resources :photos

  #get "photo" => "visitors#photo"
  #get "contact" => "visitors#contact"

  #Admin
  get "admin" => "admin#approve_photos"
  get "admin/photos" => "admin#approve_photos"
  # Create new admin page for articles
  get "admin/users" => "users#index"
  get "admin/menu" => "menuitems#index"

  #Public
  #get "menu" => "menuitems#index"
  get "carshow" => "articles#index"
  get "about" => "about#index"
  get "contact" => "contact#index"
  get "photo" => "photos#public"
end
