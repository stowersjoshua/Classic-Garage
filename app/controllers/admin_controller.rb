class AdminController < ApplicationController

  def admin

  end

  def approve_photos
    @photos = Photo.all
  end
end
