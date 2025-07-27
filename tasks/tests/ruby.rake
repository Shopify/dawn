namespace :test do
  namespace :ruby do
    require 'rubocop/rake_task'

    desc 'RuboCop'
    RuboCop::RakeTask.new(:rubocop) do |task|
      Shared::ConsoleOutputs.header
      Shared::ConsoleOutputs.sub_header('RuboCop')
      task.options << '--display-cop-names'
    end
  end
end

desc 'Alias (test:ruby:rubocop)'
task test_ruby: %w[test:ruby:rubocop]
