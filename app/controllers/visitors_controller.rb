class VisitorsController < ApplicationController

  def index
    @menu_items = Menuitem.all.order(order: :asc)
    @home_banner  = true
  end

  def photo
    @photos = Photo.approved_items
    @photo = Photo.new
    @home_banner  = true
  end

  def contact
    #I don't anticipate needing anything here.
    @home_banner  = true
  end

  def create
    @photo = Photo.new(photo_params)
    flash[:notice] = 'Photo was successfully created.' if @photo.save
    respond_with(@photo)
    @home_banner  = true
  end


  private

  def photo_params
    params.require(:photo).permit(:name, :user, :order, :approved, :image)
  end

end
