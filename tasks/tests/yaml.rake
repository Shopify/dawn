namespace :test do
  namespace :yaml do
    # https://yamllint.readthedocs.io/en/stable/quickstart.html#installing-yamllint

    desc 'yaml linter'
    task :lint do
      $logger.info('')
      $logger.info('Running YAML Linter')
      $logger.info('----------------------------------')
      command = 'yamllint -c .yamllint .'

      success = system(command)
      $logger.info('No Offenses') if success
    end
  end
end

desc 'Alias (test:yaml:lint)'
task test_yaml: %w[test:yaml:lint]
