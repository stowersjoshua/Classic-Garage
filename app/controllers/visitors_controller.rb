class VisitorsController < ApplicationController

  def photo
    @photos = Photo.all
    @photo = Photo.new
    #Make sure to change the above line to Photo.approved_items, and adjust the Photo model to define .approved_items as .all.where(the items are approved)

  end

  def contact

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
