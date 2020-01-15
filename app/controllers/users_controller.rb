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

     @dates = User.select('date')
     @times = User.select('time')
    @dates1 = []
    @dates2 = []
    @dates3 = []
    @users.each do |user|
      if user.time == "1"
        @dates1 << user.date
      elsif user.time == "2" 
        @dates2 << user.date
      elsif user.time == "3"
        @dates3 << user.date  
      end  
    end

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
