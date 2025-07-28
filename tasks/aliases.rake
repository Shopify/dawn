desc 'Alias (test:ruby:rubocop test:shopify:theme_check test:yaml:lint)'
task test: %w[test:ruby:rubocop test:shopify:theme_check test:yaml:lint]

desc 'Alias (test:ruby:rubocop:autocorrect test:shopify:fix)'
task fix: %w[test:ruby:rubocop:autocorrect test:shopify:fix]
