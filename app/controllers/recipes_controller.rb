class RecipesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy, :edit, :update]
  before_action :require_guest_user, only: [:edit, :update]
  
  def index
    request.format = :html
    @recipes = Recipe.all
    if params[:category_id].present?
      @recipes = @recipes.where(category_id: params[:category_id])
    end

    if params[:keyword].present?
      @recipes = @recipes.search(params[:keyword])
    end

    orders = {}
    orders[:carbs]   = :desc if params[:carbs] == "1"
    orders[:carbs]   = :asc if params[:carbs_low] == "1"
    orders[:fat]     = :desc if params[:fat] == "1"
    orders[:fat]     = :asc if params[:fat_low] == "1"
    orders[:protein] = :desc if params[:protein] == "1"
    orders[:protein] = :asc if params[:protein_low] == "1"
    orders[:salt]    = :desc if params[:salt] == "1"
    orders[:salt]    = :asc if params[:salt_low] == "1"

    @recipes = @recipes.order(orders) if orders.present?

    if params[:category_id].blank?
      if params[:keyword].blank?
        @global_new_recipes = Recipe.order(created_at: :desc).limit(5)
      else
        @global_new_recipes = []
      end
      @popular_recipes = []
      @new_recipes = []
    else
      @popular_recipes = @recipes.left_joins(:goods).group(:id).order("COUNT(goods.id) DESC").limit(10)
      @new_recipes = @recipes.order(created_at: :desc).limit(10)
    end
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = current_user.recipes.build(recipe_params.except(:images))

    if recipe_params[:images].present?
      images = recipe_params[:images].reject(&:blank?)
      @recipe.images.attach(images)
    end
    if @recipe.save
      redirect_to @recipe, notice: "レシピを投稿しました"
    else
      Rails.logger.debug @recipe.errors.full_messages
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

def all
  @recipes = Recipe.all
  @recipes = @recipes.search(params[:keyword]) if params[:keyword].present?
  orders = {}
  orders[:carbs]   = :desc if params[:carbs] == "1"
  orders[:carbs]   = :asc  if params[:carbs_low] == "1"
  orders[:fat]     = :desc if params[:fat] == "1"
  orders[:fat]     = :asc  if params[:fat_low] == "1"
  orders[:protein] = :desc if params[:protein] == "1"
  orders[:protein] = :asc  if params[:protein_low] == "1"
  orders[:salt]    = :desc if params[:salt] == "1"
  orders[:salt]    = :asc  if params[:salt_low] == "1"
  @recipes = @recipes.order(orders) if orders.present?
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
