class AdminController < ApplicationController
  before_filter :authenticate_user!
  before_filter :admin_only
  def admin

  end

  def approve_photos
    @new_photos = Photo.unapproved_items
    @used_photos = Photo.approved_items

    #puts @new_photos
    #@used_photos = Photo.all
  end

  private

  def admin_only
    unless current_user.admin?
      redirect_to :back, :alert => "Access denied."
    end
  end

  def secure_params
    params.require(:user).permit(:role)
  end

end
