class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category, optional: true
  has_many_attached :images

  validate :images_limit

def images_limit
  if images.attachments.size > 3
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
