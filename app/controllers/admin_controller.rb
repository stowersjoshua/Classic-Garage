class AdminController < ApplicationController

  def admin

  end

  def approve_photos
    #@new_photos = Photo.unapproved_items

    @new_photos = Photo.unapproved_items
    @used_photos = Photo.approved_items

    puts ""
    puts ""
    puts "-------------------"
    puts @new_photos
    puts "-------------------"
    puts ""
    puts ""

    #@used_photos = Photo.all
  end
end
