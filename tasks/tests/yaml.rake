namespace :test do
  namespace :yaml do
    # https://yamllint.readthedocs.io/en/stable/quickstart.html#installing-yamllint

    desc 'yaml linter'
    task :lint do
      Shared::ConsoleOutputs.header
      Shared::ConsoleOutputs.sub_header('Yaml Lint')

      command = "yamllint -c #{$project_vars['shared']['shared_path']}/.yamllint #{$project_vars['shared']['shared_path']}"

      success = system(command)
      Shared::ConsoleOutputs.message('No Offenses') if success
    end
  end
end

desc 'Alias (test:yaml:lint)'
task test_yaml: %w[test:yaml:lint]
