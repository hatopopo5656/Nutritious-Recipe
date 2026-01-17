class Users::SessionsController < Devise::SessionsController
  def guest_sign_in
    user = User.find_or_create_by(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
    end

    sign_in user
    if params[:return_to].present?
      redirect_to params[:return_to], notice: "ゲストユーザーとしてログインしました", status: :see_other
    else
      redirect_to root_path, notice: "ゲストユーザーとしてログインしました", status: :see_other
    end
  end
end
