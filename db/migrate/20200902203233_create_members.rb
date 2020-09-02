class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.integer :user_id
      t.integer :project_id
      t.boolean :is_owner

      t.timestamps
    end
  end
end
