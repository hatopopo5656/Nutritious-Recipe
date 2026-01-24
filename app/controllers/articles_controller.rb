class ArticlesController < ApplicationController
  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
    else
      render :new
    end
  end

  private

  def article_params
    params.require(:article).permit(
    :title,
    :description,
    :grocery,
    :carbs,
    :fat,
    :protein,
    :salt,
    :category_id,
    images: []
  )
  end
end

class ApplicationController < ActionController::Base
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
