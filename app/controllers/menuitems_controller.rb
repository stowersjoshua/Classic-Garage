class MenuitemsController < ApplicationController
  before_action :set_menuitem, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @menuitems = Menuitem.all
    respond_with(@menuitems)
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
    @menuitem.update(menuitem_params)
    respond_with(@menuitem)
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
      params.require(:menuitem).permit(:name, :description, :price, :order)
    end
end
