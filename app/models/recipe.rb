class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category, optional: true

  has_one_attached :image
  has_many :goods, dependent: :destroy
  has_many :good_users, through: :goods, source: :user

  validates :title, presence: true, length: { maximum: 50 }
  validates :description, presence: true
  validates :grocery, presence: true
  validates :category_id, presence: true

  validates :carbs, :fat, :protein, :salt,
            numericality: { allow_nil: true, greater_than_or_equal_to: 0 },
            format: { with: /\A\d+(\.\d{1})?\z/, message: "を入れてください" }

  def self.search(keyword)
    if keyword.present?
      where("title LIKE ? OR description LIKE ?", "%#{keyword}%", "%#{keyword}%")
    else
      all
    end
  end
end