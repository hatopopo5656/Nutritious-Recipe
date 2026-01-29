class RecipesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy, :edit, :update]
  before_action :require_guest_user, only: [:edit, :update]
  before_action :set_recipe, only: [:edit, :update, :show, :destroy]

  def index
    request.format = :html

    if params[:keyword].present?
      @recipes = Recipe.search(params[:keyword])
      @recipes = @recipes.where(category_id: params[:category_id]) if params[:category_id].present?
      @global_new_recipes = []
      @popular_recipes = []
      @new_recipes = []
      return
    end
    
    @recipes = Recipe.all

    @recipes = @recipes.where(category_id: params[:category_id]) if params[:category_id].present?

    orders = {
      carbs:   params[:carbs] == "1" ? :desc : (params[:carbs_low] == "1" ? :asc : nil),
      fat:     params[:fat] == "1" ? :desc : (params[:fat_low] == "1" ? :asc : nil),
      protein: params[:protein] == "1" ? :desc : (params[:protein_low] == "1" ? :asc : nil),
      salt:    params[:salt] == "1" ? :desc : (params[:salt_low] == "1" ? :asc : nil)
    }.compact
    
    @recipes = @recipes.order(orders) if orders.present?
    
    if params[:category_id].blank?
      @global_new_recipes = Recipe.order(created_at: :desc).limit(5)
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
    @recipe = current_user.recipes.build(recipe_params)

    if @recipe.save
      redirect_to @recipe, notice: "レシピを投稿しました"
  else
      Rails.logger.debug @recipe.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @recipe.update(recipe_params)
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
  end

  def destroy
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

    orders = {
      carbs:   params[:carbs] == "1" ? :desc : (params[:carbs_low] == "1" ? :asc : nil),
      fat:     params[:fat] == "1" ? :desc : (params[:fat_low] == "1" ? :asc : nil),
      protein: params[:protein] == "1" ? :desc : (params[:protein_low] == "1" ? :asc : nil),
      salt:    params[:salt] == "1" ? :desc : (params[:salt_low] == "1" ? :asc : nil)
    }.compact

    @recipes = @recipes.order(orders) if orders.present?
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(
      :title, :description, :carbs, :fat, :protein, :salt,
      :grocery, :category_id, :image
    )
  end
  
  def require_guest_user
    unless current_user&.guest?
      redirect_to recipes_path, alert: "編集できるのはゲストユーザーのみです"
    end
  end
end
