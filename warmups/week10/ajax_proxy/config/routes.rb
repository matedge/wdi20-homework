Rails.application.routes.draw do
  get 'pages/fetch'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/fetch' => 'pages#fetch'

  get '/jquery' => 'pages#gimme_jquery'  # just so we can run some jQuery in the console (could also just go to http://jquery.com/ and test it from there - that would actually be a better test for CORS permission)

end
