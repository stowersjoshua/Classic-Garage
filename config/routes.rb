Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  root to: 'visitors#index'
  devise_for :users

  resources :articles
  resources :users
  resources :menuitems
  resources :photos

  #Admin
  get "admin" => "admin#approve_photos"
  get "admin/photos" => "admin#approve_photos"
  get "admin/post" => "articles#new"
  get "admin/users" => "users#index"
  get "admin/menu" => "menuitems#index"

  #Public
  get "carshow" => "articles#index"
  get "about" => "about#index"
  get "contact" => "contact#index"
  get "photo" => "photos#public"

end
