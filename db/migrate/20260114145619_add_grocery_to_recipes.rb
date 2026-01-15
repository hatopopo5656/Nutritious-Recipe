class AddGroceryToRecipes < ActiveRecord::Migration[7.2]
  def change
    add_column :recipes, :grocery, :text
  end
end
