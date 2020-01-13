Rails.application.routes.draw do
  devise_for :controllers
  resources :meetings
  devise_for :users
  root 'users#index'
  resources :users do 
    collection do
      get "mypage"
      get "calendar"
      post "calendar2"
    end
  end
end
