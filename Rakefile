$VERBOSE = nil

# For Rake Tasks
require 'colorize'
require 'fileutils'
require 'highline/import'
require 'logger'
require 'rubocop-rake'

# Load Ruby Libraries
Dir.glob('tasks/**/*.rb').each do |file|
  require_relative file.gsub('.rb', '')
end

# Load Rake Tasks
Dir.glob('tasks/**/*.rake').each do |task_file|
  load task_file
end

# Default Rake Task (rake <enter>) - List all available tasks
task :default do
  system('rake -T')
end

$logger = Logger.new($stdout)
$logger.formatter = proc { |_severity, _datetime, _progname, msg| "#{msg}\n" }
