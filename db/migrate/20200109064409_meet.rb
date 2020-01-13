class Meet < ActiveRecord::Migration[5.2]
  def change
    add_column :users , :date , :date
    add_column :users , :time , :time
  end
end
