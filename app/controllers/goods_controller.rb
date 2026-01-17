class GoodsController < ApplicationController
  before_action :authenticate_user!

  def create
    recipe = Recipe.find(params[:recipe_id])
    current_user.goods.create(recipe: recipe)
    redirect_back fallback_location: recipes_path
  end

  def destroy
    recipe = Recipe.find(params[:recipe_id])
    current_user.goods.find_by(recipe: recipe)&.destroy
    redirect_back fallback_location: recipes_path
  end
end