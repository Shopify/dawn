namespace :test do
  namespace :shopify do
    desc 'Shopify Theme Check'
    task :theme do
      Shared::ConsoleOutputs.header
      Shared::ConsoleOutputs.sub_header('Terraform Format Check')
      command = 'theme-check .'
      success = Shared::Shell.run_command(command)
      Shared::ConsoleOutputs.message('No Offenses') if success
    end
  end
end

desc 'Alias (test:shopify:theme)'
task test_theme: %w[test:shopify:theme]
