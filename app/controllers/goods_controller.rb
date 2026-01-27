class GoodsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_recipe

  def create
    current_user.goods.create(recipe_id: params[:recipe_id])
    redirect_back fallback_location: recipes_path
  end
  
  def destroy
    good = current_user.goods.find_by(recipe_id: params[:recipe])
    good.destroy if good
    redirect_back fallback_location: recipes_path
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end
end