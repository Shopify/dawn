# All Tasks that really are only used for debugging or validating Shared and Terraform.
namespace :shared do
  namespace :debug do
    desc 'Display Current Environment'
    task :env do
      Shared::ConsoleOutputs.environment
    end

    # No header so works on various roles
    desc 'Display Shared Version'
    task :shared_version do
      shared_version = Shared::Vars.shared_version
      Shared::ConsoleOutputs.message_item('Shared', "v#{shared_version}")
    end

    desc 'Show Project Rake Variables from Yaml and Environment Variables'
    task :show_vars do
      Shared::Vars.show_vars
    end
  end
end

desc 'Alias (shared:debug:env)'
task env: %w[shared:debug:env]

desc 'Alias (shared:debug:show_vars)'
task show_vars: %w[shared:debug:show_vars]
