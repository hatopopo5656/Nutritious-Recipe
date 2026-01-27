class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :recipes
  has_many :goods, dependent: :destroy
  has_many :good_recipes, through: :goods, source: :recipe

  def self.guest
    find_or_create_by!(email: "guest@example.com") do |u|
      u.password = SecureRandom.urlsafe_base64
    end
  end
  
  def guest?
    email == "guest@example.com"
  end
end
