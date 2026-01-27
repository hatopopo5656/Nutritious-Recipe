class Users::SessionsController < Devise::SessionsController
  def guest_sign_in
    user = User.find_or_create_by(email: 'guest@example.com') do |u|
      u.password = SecureRandom.urlsafe_base64
    end

    sign_in user
    
    redirect_to(
      params[:return_to].presence || root_path,
      notice: "ゲストユーザーとしてログインしました",
      status: :see_other
    )
  end
end

