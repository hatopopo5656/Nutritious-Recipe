class ApplicationController < ActionController::Base
  allow_browser versions: :modern

  def after_sign_out_path_for(resource_or_scope)
    if request.referer&.include?("/users/guest_sign_in")
      root_path
    else
      request.referer || root_path
    end
  end
end
