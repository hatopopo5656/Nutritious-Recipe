class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category, optional: true
  has_many_attached :images
  has_many :goods, dependent: :destroy
  has_many :good_users, through: :goods, source: :user

  validate :images_limit

def images_limit
  real_images = images.attachments.reject { |a| a.blob.nil? }
  if real_images.size > 3
    errors.add(:images, "は3枚までアップロードできます")
  end
end

  def self.search(keyword)
  if keyword.present?
    joins(:rich_text_description)
      .where("title LIKE ? OR action_text_rich_texts.body LIKE ?", "%#{keyword}%", "%#{keyword}%")
  else
    all
  end
end
end
