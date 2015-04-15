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
  get "admin/photos" => "admin#approve_photos"
  get "menu" => "menuitems#index"
  get "admin" => "admin#approve_photos"
  get "carshow" => "articles#index"
  get "about" => "about#index"
  get "contact" => "contact#index"
  get "photo" => "photos#public"
end
