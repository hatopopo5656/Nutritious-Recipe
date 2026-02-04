# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

categories = [
  "糖質制限",
  "脂質制限",
  "タンパク質",
  "塩分制限",
]

categories.each do |name|
  Category.find_or_create_by(name: name)
end
Recipe.find_or_create_by(title: "お手軽サラダ") do |r|
  r.description = <<~HTML
    <h2>作り方</h2>
    <p>レタスとトマトを洗い、オリーブオイルで和える</p>
    <ul>
      <li>塩 少々</li>
      <li>胡椒 少々</li>
    </ul>
  HTML

  r.grocery = <<~HTML
    <ul>
      <li>レタス 1個</li>
      <li>トマト 2個</li>
      <li>オリーブオイル 大さじ1</li>
    </ul>
  HTML

  r.carbs = 5
  r.fat = 10
  r.protein = 3
  r.salt = 1
  r.category = Category.find_by(name: "糖質制限")
end