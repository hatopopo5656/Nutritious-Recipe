class AddFieldsToArticles < ActiveRecord::Migration[7.2]
  def change
    add_column :articles, :description, :text
    add_column :articles, :grocery, :text
    add_column :articles, :carbs, :integer
    add_column :articles, :fat, :integer
    add_column :articles, :protein, :integer
    add_column :articles, :salt, :decimal
    add_column :articles, :category_id, :integer
  end
end
