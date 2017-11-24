class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :link
      t.text :description
      t.integer :trip_id
      t.timestamps
    end
  end
end
