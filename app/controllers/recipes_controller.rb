class RecipesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy, :edit, :update]
  before_action :require_guest_user, only: [:edit, :update]
  
  def index
    request.format = :html
    @recipes = Recipe.search(params[:keyword])

    if params[:category_id].present?
    @recipes = @recipes.where(category_id: params[:category_id])
  end

end
  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to @recipe, notice: "レシピを投稿しました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params.except(:images))
      
      if recipe_params[:images].present?
        @recipe.images.attach(recipe_params[:images])
      end   
      if params[:recipe][:remove_image_ids].present?
        @recipe.images.where(id: params[:recipe][:remove_image_ids]).each(&:purge)
      end

      if params[:stay].present?
      redirect_to edit_recipe_path(@recipe), notice: "レシピを更新しました"
      else
        redirect_to @recipe, notice: "更新しました"
      end
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end
  
  def destroy
   @recipe = Recipe.find(params[:id])
  if @recipe.user_id == current_user.id
    @recipe.destroy
    redirect_to recipes_path, notice: "レシピを削除しました"
  else
    redirect_to recipes_path, alert: "削除権限がありません"
  end
end

private
def recipe_params
  params.require(:recipe).permit(:title, :description, :carbs, :fat, :protein, :salt, :grocery, :category_id, images: [])
end
def require_guest_user
  unless current_user&.guest?
    redirect_to recipes_path, alert: "編集できるのはゲストユーザーのみです"
  end
end
end
