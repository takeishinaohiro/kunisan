class UsersController < ApplicationController
  protect_from_forgery except: :calendar2
  def index
    if user_signed_in?
      redirect_to mypage_users_path
    end

    if session[:day]
      session.clear
    end  

  end

  def mypage

  end

  def calendar
    @users = User.all
    # @cale = User.select('date','time')たむさんおんしゃす清水
    # binding.pry
  end

  def calendar2
    session[:day] = params[:day]
    session[:time] = params[:time]
    redirect_to new_user_registration_path
  end

  private

  def user_params
    params.require(:user).permit!
  end
end
