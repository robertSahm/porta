Refinery::PagesController.class_eval do

    include Refinery::Blog::ControllerHelper
    before_filter :find_all_blog_posts, :only => [:home]
    
 end