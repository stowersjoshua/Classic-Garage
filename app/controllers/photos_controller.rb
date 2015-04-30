class PhotosController < ApplicationController
  before_filter :authenticate_user!, :except => :public
  before_action :set_photo, only: [:show, :edit, :update, :destroy]
  before_filter :admin_only, :except => :public
  #before_filter :admin_only, :only => :show
  respond_to :html

  def public
    #@photos = Photo.approved_items
    @home_banner  = true
    @page_name = "Photos"
    @photos = Photo.approved_items.order(order: :asc)
    @photo = Photo.new
  end

  def index
    @photos = Photo.approved_items
    respond_with(@photos)
  end

  def show
    respond_with(@photo)
  end

  def new
    @photo = Photo.new
    respond_with(@photo)
  end

  def edit
  end

  def create
    @photo = Photo.new(photo_params)
    flash[:notice] = 'Photo was successfully created.' if @photo.save
    #respond_with(@photo)
    redirect_to "/photo"
  end

  def update
    flash[:notice] = 'Photo was successfully updated.' if @photo.update(photo_params)
    respond_with(@photo)
  end

  def destroy
    @photo.destroy
    respond_with(@photo)
  end

  private
    def set_photo
      @photo = Photo.find(params[:id])
    end

    def photo_params
      params.require(:photo).permit(:name, :user, :order, :approved, :image)
    end

    def admin_only
      unless current_user.admin?
        redirect_to :back, :alert => "Access denied."
      end
    end

    def secure_params
      params.require(:user).permit(:role)
    end

end
