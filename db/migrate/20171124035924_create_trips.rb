class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :location
      t.text :notes
      t.string :date
      t.integer :user_id
      t.timestamps
    end
  end
end
