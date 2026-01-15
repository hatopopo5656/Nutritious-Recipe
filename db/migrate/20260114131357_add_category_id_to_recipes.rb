class AddCategoryIdToRecipes < ActiveRecord::Migration[7.2]
  def change
    add_column :recipes, :category_id, :integer
  end
end
