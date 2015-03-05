class AddCategoryToMenuitems < ActiveRecord::Migration
  def change
    add_column :menuitems, :category, :string
  end
end
