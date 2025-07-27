$VERBOSE = nil

# For Rake Tasks
require 'colorize'
require 'fileutils'
require 'highline/import'
require 'rubocop-rake'

# Load Ruby Libraries
Dir.glob('tasks/**/*.rb').each do |file|
  require_relative file.gsub('.rb', '')
end

# Load Rake Tasks
Dir.glob('tasks/**/*.rake').each do |task_file|
  load task_file
end

# Default Rake Task (rake <enter>) - Auto Correct Ruby Style and Format
desc 'Alias (test:style:ruby:auto_correct test:yaml:lint)'
task default: %w[test:ruby:rubocop:auto_correct test:yaml:lint]
