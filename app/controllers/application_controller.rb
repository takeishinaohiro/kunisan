class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :meet
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email,:password,:tel,:name,:read_name,:facebook_name,:job,:time,:date])
 
  end

  

  def meet
    @users1 = User.where(time:"15:30~") 
    @users2 = User.where(time:"17:30~") 
    @users3 = User.where(time:"19:30~") 

    @dates = User.select("date")
    @date1 = []
    @date2 = []
    @date3 = []
    @date4 = []

    @dates.each do |date|
      @date4 << date.date
    end

    @users1.each do |user|
      @date1 << user.date
    end

    @users2.each do |user|
      @date2 << user.date
      
    end  

    @users3.each do |user|
      @date3 << user.date
    end  
    
  end

end

