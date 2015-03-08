class VisitorsController < ApplicationController

  def index
    @menu_items = Menuitem.all.order(order: :asc)
  end

  def photo
    @photos = Photo.approved_items
    @photo = Photo.new
  end

  def contact
    #I don't anticipate needing anything here.
  end

  def create
    @photo = Photo.new(photo_params)
    flash[:notice] = 'Photo was successfully created.' if @photo.save
    respond_with(@photo)
  end


  private

  def photo_params
    params.require(:photo).permit(:name, :user, :order, :approved, :image)
  end

end
