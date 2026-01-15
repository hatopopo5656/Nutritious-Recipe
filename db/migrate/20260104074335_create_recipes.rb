class CreateRecipes < ActiveRecord::Migration[7.2]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.integer :carbs
      t.integer :fat
      t.integer :protein
      t.float :salt
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
