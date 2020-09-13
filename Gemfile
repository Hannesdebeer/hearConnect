source "https://rubygems.org"


gem "jekyll", "~> 3.7.3"
gem "autoprefixer-rails"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.6'
  gem 'jekyll-assets', :github => 'jekyll/jekyll-assets'
  gem 'sprockets', '~> 4.0.beta', { require: false }
  gem 'therubyracer'
  gem 'json'
  gem 'json_pure'
  gem 'jekyll-coffeescript'
  gem 'uglifier', '~> 4.1', '>= 4.1.7', { require: false }

end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
