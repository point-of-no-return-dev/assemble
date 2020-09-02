class CreateUserTechnologies < ActiveRecord::Migration[6.0]
  def change
    create_table :user_technologies do |t|
      t.integer :user_id
      t.integer :technology_id

      t.timestamps
    end
  end
end
