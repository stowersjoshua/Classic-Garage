class AdminController < ApplicationController

  def admin

  end

  def approve_photos
    #@new_photos = Photo.unapproved_items

    @new_photos = Photo.unapproved_items
    @used_photos = Photo.approved_items
    puts @new_photos

    @user = User.find(params[:id])
    unless current_user.admin?
      unless @user == current_user
        redirect_to :back, :alert => "Access denied."
      end
    end

    #@used_photos = Photo.all
  end
end
