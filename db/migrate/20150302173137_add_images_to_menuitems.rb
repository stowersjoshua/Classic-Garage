class AddImagesToMenuitems < ActiveRecord::Migration
  def change
    add_column :menuitems, :image_file_name, :string
    add_column :menuitems, :image_content_type, :string
    add_column :menuitems, :image_file_size, :integer
    add_column :menuitems, :image_updated_at, :datetime
  end
end
