class Photo < ActiveRecord::Base
  include ActionView::Helpers::NumberHelper

  has_attached_file :image
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  attr_accessor :approved_items

  def self.approved_items
    self.all.where(approved: true)
  end

  def size_in_meg
    number_to_human_size(self.image_file_size, :precision => 5)
  end

end
