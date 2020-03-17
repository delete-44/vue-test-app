Rails.application.routes.draw do
  root to: 'static_pages#landing'
  get 'static_pages/landing'
  resources :films, only: %i[index update]
end
