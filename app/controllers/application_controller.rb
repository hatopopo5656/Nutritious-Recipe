class ApplicationController < ActionController::Base
  allow_browser versions: :modern
  
  def after_sign_out_path_for(resource_or_scope)
    referer = request.referer
    redirect_to_root_paths = [
      "/edit",
      "/recipes/new",
      "/users/guest_sign_in"
    ]
    
    if referer && redirect_to_root_paths.any? { |path| referer.include?(path) }
      root_path
    else
      referer || root_path
    end
  end
end
