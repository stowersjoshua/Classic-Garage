class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.string :user
      t.integer :order
      t.boolean :approved

      t.timestamps
    end
  end
end
