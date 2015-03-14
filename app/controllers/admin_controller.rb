class AdminController < ApplicationController

  def admin

  end

  def approve_photos
    @new_photos = Photo.unapproved_items
    @used_photos = Photo.approved_items
  end
end
