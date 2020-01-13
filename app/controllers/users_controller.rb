class UsersController < ApplicationController
  def index
    if user_signed_in?
      redirect_to mypage_users_path
    end


  end

  def mypage

  end

  def calendar
    @users = User.all
    


  end

  private

  def user_params
    params.require(:user).permit!
  end
end
