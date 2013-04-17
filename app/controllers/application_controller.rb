class ApplicationController < ActionController::Base
  protect_from_forgery
 	
enable :sessions
set :raise_errors, false
set :show_exceptions, false



# Scope defines what permissions that we are asking the user to grant.
# In this example, we are asking for the ability to publish stories
# about using the app, access to what the user likes, and to be able
# to use their pictures.  You should rewrite this scope with whatever
# permissions your app needs.
# See https://developers.facebook.com/docs/reference/api/permissions/
# for a full list of permissions


end
