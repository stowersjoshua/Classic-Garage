class MenuitemsController < ApplicationController
  before_filter :authenticate_user!
  before_action :set_menuitem, only: [:show, :edit, :update, :destroy]
  before_filter :admin_only
  respond_to :html

  def index
    @menuitems = Menuitem.all
    respond_with(@menuitems)
  end

  def admin
    @menuitem = Menuitem.new
  end

  def show
    respond_with(@menuitem)
  end

  def new
    @menuitem = Menuitem.new
    respond_with(@menuitem)
  end

  def edit
  end

  def create
    @menuitem = Menuitem.new(menuitem_params)
    @menuitem.save
    respond_with(@menuitem)
  end

  def update
    redirect_to menuitems_path 
    
    #@menuitem.update(menuitem_params)
    #respond_with(@menuitem)
  end

  def destroy
    @menuitem.destroy
    respond_with(@menuitem)
  end

  private
    def set_menuitem
      @menuitem = Menuitem.find(params[:id])
    end

    def menuitem_params
      params.require(:menuitem).permit(:name, :category, :description, :price, :order, :image)
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



