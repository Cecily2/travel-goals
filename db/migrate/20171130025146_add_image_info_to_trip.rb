class AddImageInfoToTrip < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :image_creator, :string
    add_column :trips, :image_creator_link, :string
    add_column :trips, :image_full, :string
    add_column :trips, :image_raw, :string
    add_column :trips, :image_regular, :string
    add_column :trips, :image_small, :string
    add_column :trips, :image_thumb, :string
  end
end
