Rails.application.config.middleware.use OmniAuth::Builder do
  #provider :twitter, 'CONSUMER_KEY', 'CONSUMER_SECRET'
  provider :facebook, '564485290252346', '9084cc362f6acf307bd89dc0c5444977'

end