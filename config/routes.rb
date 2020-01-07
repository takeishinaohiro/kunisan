Rails.application.routes.draw do
  devise_for :users
  root 'users#index'
  resources :users do 
    collection do
      get "mypage"
    end
  end
end
