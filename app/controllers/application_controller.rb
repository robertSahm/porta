class ApplicationController < ActionController::Base
  # protect_from_forgery
 	
 	def create  auth = request.env["omniauth.auth"]
 	
 		render :text => auth.to_xml
		
		end


end
