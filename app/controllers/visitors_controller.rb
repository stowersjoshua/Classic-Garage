class VisitorsController < ApplicationController

  def index
    @menu_items = Menuitem.all.order(order: :asc)
    @home_banner  = true
    @page_name = "Home"
  end

  def photo
    @photos = Photo.approved_items
    @photo = Photo.new
    @home_banner  = true
    @page_name = "Photos"
  end

  def contact
    #I don't anticipate needing anything here.
    @home_banner  = true
    @page_name = "Contact Us"
  end

  def create
    @photo = Photo.new(photo_params)
    flash[:notice] = 'Photo was successfully created.' if @photo.save
    respond_with(@photo)
    @home_banner  = true
    @page_name = "Create"
  end


  private

  def photo_params
    params.require(:photo).permit(:name, :user, :order, :approved, :image)
  end

end
