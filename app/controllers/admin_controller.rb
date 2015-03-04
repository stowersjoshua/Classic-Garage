class AdminController < ApplicationController
  def approve_photos
    @photos = Photo.all
  end
end
