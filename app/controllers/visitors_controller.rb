class VisitorsController < ApplicationController

  def photo
    @photos = Photo.all
    #Make sure to change the above line to Photo.approved_items, and adjust the Photo model to define .approved_items as .all.where(the items are approved)

  end

  def contact

  end

end
