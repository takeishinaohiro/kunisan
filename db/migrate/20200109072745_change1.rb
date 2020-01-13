class Change1 < ActiveRecord::Migration[5.2]
  def change
    change_column :users , :date, :string
    change_column :users , :time, :string
  end
end
