namespace :test do
  namespace :shopify do
    desc 'Shopify Theme Check'
    task :theme_check do
      $logger.info('')
      $logger.info('Shopify Theme Check')
      $logger.info('----------------------------------')
      command = 'theme-check .'
      Shared::Shell.run_command(command)
    end

    desc 'Shopify Theme Fix'
    task :fix do
      $logger.info('')
      $logger.info('Shopify Theme Fix')
      $logger.info('----------------------------------')
      command = 'theme-check . --auto-correct'
      Shared::Shell.run_command(command)
    end
  end
end

desc 'Alias (test:shopify:theme)'
task test_theme: %w[test:shopify:theme_check]
