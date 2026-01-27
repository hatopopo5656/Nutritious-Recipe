class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category, optional: true

  has_many_attached :images
  has_many :goods, dependent: :destroy
  has_many :good_users, through: :goods, source: :user

  validates :title, presence: true, length: { maximum: 50 }
  validates :description, presence: true
  validates :grocery, presence: true
  validates :category_id, presence: true

  validates :carbs, :fat, :protein, :salt,
            numericality: { allow_nil: true, greater_than_or_equal_to: 0 },
            format: { with: /\A\d+(\.\d{1})?\z/, message: "を入れてください" }

  validate :images_limit

  def images_limit
    real_images = images.attachments.reject { |a| a.blob.nil? }
    if real_images.size > 3
      errors.add(:images, "は3枚までアップロードできます")
    end
  end

  def self.search(keyword)
    if keyword.present?
      where("title LIKE ? OR description LIKE ?", "%#{keyword}%", "%#{keyword}%")
    else
      all
    end
  end
end