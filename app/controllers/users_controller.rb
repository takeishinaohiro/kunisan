class UsersController < ApplicationController
  def index
    if user_signed_in?
      redirect_to mypage_users_path
    end


  end

  def mypage
  
  end
end
